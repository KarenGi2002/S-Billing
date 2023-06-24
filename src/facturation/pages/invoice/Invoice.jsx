import { useParams } from 'react-router-dom'
import { AddNewButton, EditProduct, TableButton } from '../../components'
import { Col, Row, Space, Statistic, Table, message } from 'antd'
import { deleteProduct } from '../../helpers/products'
import { useEffect, useState } from 'react'
import { InventoryApi, InvoiceApi } from '../../../services'
import { AddProduct } from '../../components/'
import { createTableColumns } from '../../helpers/createTableColumns'
import { useIsMount } from '../../hooks/'
import { findProductArticle } from '../../helpers/products/findProductArticle'

const calcStockQuantity = (stockQuantity, amount, instruction) => {
  switch(instruction) {
    case 'add':
      return stockQuantity + amount
    case 'subtract':
      return stockQuantity - amount
    default:
      return stockQuantity
  }
}

export const Invoice = () => {
  const { invoice_id } = useParams()
  const isMount = useIsMount()
  /* message api from antd */
  const [messageApi, contextHolder] = message.useMessage()
  const [areInventoriesEmpty, setAreInventoriesEmpty] = useState(true)
  /* invoice total from database */
  const [dbTotal, setDbTotal] = useState(0)
  const [articleNames, setArticleNames] = useState([])
  /* necessary data loaded from database */
  const [products, setProducts] = useState([])
  const [inventories, setInventories] = useState([])
  /* products table columns */
  const [columns, setColumns] = useState([])
  /* invoice stats */
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  /* product to edit */
  const [editProduct, setEditProduct] = useState({})
  /* forms logic */
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const toggleDisplayEditForm = () => setEditProduct({})
  /* articles functions */
  const addArticleName = (name) => setArticleNames(prev => [...prev, name])
  const removeArticleName = (name) => setArticleNames(prev => prev.filter(article => article !== name))
  /* subTotal functions */
  const addPriceToSubTotal = (price) => setSubTotal(prev => prev + price)
  const subtractPriceToSubTotal = (price) => setSubTotal(prev => prev - price)
  /* inventories functions */
  const changeArticleAmount = (articleId, amount, instruction) => {
    setInventories((prev) => {
      return prev.map((inventory) => ({
        ...inventory,
        options: inventory?.options?.map((article) => {
          if (article.articleId !== articleId) return article
          return {
            ...article,
            stockQuantity: calcStockQuantity(article?.stockQuantity, amount, instruction)
          }
        })
      }))
    })
  }
  /* handlers to add and edit products */
  const addGuiProduct = (product) => {
    setProducts((prev) => [{ ...product, key: product.productId }, ...prev])
    changeArticleAmount(product.articleId, product.amount, 'subtract')
  }
  const updateGuiProduct = (productId, updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.productId !== productId) return product
        return {
          key: product.key,
          productId,
          ...updatedProduct
        }
      })
    )
    // subtract the new product amount from the stock quantity
    changeArticleAmount(updatedProduct.articleId, updatedProduct.amount, 'subtract')
  }

  const noInventoriesWarning = () => {
    messageApi.open({ type: 'warning', content: 'You can\'t add products if there are no articles' });
  }
  /* run when inventories change */
  useEffect(() => {
    if (isMount) return // on first render don't do anything
    if (inventories.length === 0) {
      noInventoriesWarning()
      return
    }
    const isSomeInventoryNotEmpty = inventories.some(inventory => inventory?.options?.length !== 0)
    setAreInventoriesEmpty(!isSomeInventoryNotEmpty)
    if (!isSomeInventoryNotEmpty) noInventoriesWarning()
  }, [inventories])

  const getInvoiceProducts = () => {
    new InvoiceApi()
    .apiInvoiceIdProductsGet(invoice_id)
    .then(({ body }) => {
      /* get invoice total from first product element */
      setDbTotal(body['$values'][0]?.invoice?.total || 0)
      /* Add key property to each product */
      let invoiceSubTotal = 0
      const names = []
      const productsWithKey = body['$values'].map((product) => {
        invoiceSubTotal += product.total
        const productName = product?.article?.name || ''
        names.push(productName)
        return {
          ...product,
          name: productName,
          key: product.productId
        }
      })
      setArticleNames(names)
      setSubTotal(invoiceSubTotal)
      setProducts(productsWithKey)
    })
    .catch(() => {
      messageApi.open({ type: 'error', content: 'Couldn\'t load invoice products from database' })
    })
  }
  const getInventories = () => {
    new InventoryApi()
      .apiInventoryGet()
      .then(({ body }) => {
        const inventoriesOptions = body.map((inventory) => ({
          ...inventory,
          label: inventory.name,
          options: inventory.articles['$values'].map((article) => ({
            ...article,
            label: article.name,
            value: article.name
          }))
        }))
        setInventories(inventoriesOptions)
      })
      .catch(() => {
        messageApi.open({ type: 'error', content: 'Couldn\'t load inventories from database' })
      })
  }
  /* run when invoice_id changes */
  useEffect(() => { getInvoiceProducts() }, [invoice_id])
  /* run when subtotal changes */
  useEffect(() => {
    if (isMount) return // on first render don't do anything
    // calculate invoice ISV and total
    const isv = subTotal * 0.15
    const currentTotal = subTotal + isv
    setTotal(currentTotal)
    /* if invoice total from datbase is the same as the one calculated there's no need to update it */
    if (dbTotal === currentTotal) return
    // set subtotal, ISV and total in the database
    const body = { invoice: { subTotal, isv, total: currentTotal } }
    new InvoiceApi()
    .apiInvoiceIdPut(invoice_id, body)
    .then(() => {
      messageApi.open({ type: 'success', content: 'Invoice stats were updated successfully' })
    })
    .catch(() => {
      messageApi.open({ type: 'error', content: 'Couldn\'t update invoice in database' })
    })
  }, [subTotal, dbTotal, invoice_id])
  /* run when component is mounted */
  useEffect(() => {
    getInventories()
    setColumns(createTableColumns([
      { val: 'Name' },
      { val: 'Amount' },
      { val: 'Price' },
      { val: 'Total' },
      {
        val: 'Action',
        render: (_, record) => (
          <Space size="middle">
            <TableButton
              iconName="edit"
              handler={() => setEditProduct(record)}
            />
            <TableButton
              iconName="delete"
              handler={() => {
                deleteProduct(record.productId, setProducts)
                .then(msg => {
                  // subtract product total from invoice subTotal
                  subtractPriceToSubTotal(record?.total)
                  // increment product amount to article amount
                  changeArticleAmount(record.articleId, record.amount, 'add')
                  // remove article name from the added articles array
                  removeArticleName(record.name)
                  messageApi.open({ type: 'success', content: msg })
                })
                .catch(err => {
                  messageApi.open({ type: 'error', content: err })
                })
              }}
            />
          </Space>
        )
      }
    ]))
  }, [])

  return (
    <section className="container">
      {contextHolder}
      <AddNewButton toggleFormPopup={toggleDisplayForm} disabled={areInventoriesEmpty} />
      <Row style={{marginBottom: '2rem'}}>
        <Col span={8}>
          <Statistic title="Subtotal" value={subTotal} precision={2} />
        </Col>
        <Col span={8}>
          <Statistic title="ISV" value={subTotal * 0.15} precision={2} />
        </Col>
        <Col span={8}>
          <Statistic title="Total" value={total} precision={2} />
        </Col>
      </Row>
      <Table dataSource={products} columns={columns} />
      {displayForm && (
        <AddProduct
          toggleDisplayForm={toggleDisplayForm}
          addGuiProduct={addGuiProduct}
          invoiceId={invoice_id}
          inventories={inventories}
          addPriceToSubTotal={addPriceToSubTotal}
          addedArticles={articleNames}
          addArticleName={addArticleName}
          messageApi={messageApi}
        />
      )}
      {Object.keys(editProduct).length !== 0 && (
        <EditProduct
          product={editProduct}
          article={findProductArticle(editProduct.articleId, inventories)}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiProduct={updateGuiProduct}
          addPriceToSubTotal={addPriceToSubTotal}
          subtractPriceToSubTotal={subtractPriceToSubTotal}
          changeArticleAmount={changeArticleAmount}
          messageApi={messageApi}
        />
      )}
    </section>
  )
}
