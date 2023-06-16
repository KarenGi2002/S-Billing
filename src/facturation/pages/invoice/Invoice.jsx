import { useParams } from 'react-router-dom'
import { AddNewButton } from '../../components'
import { Button, Space, Table } from 'antd'
import { deleteProduct } from '../../helpers/products'
import { useEffect, useState } from 'react'
import { InventoryApi, InvoiceApi } from '../../../services'
import { AddProduct } from '../../components/'

export const Invoice = () => {
  const { invoice_id } = useParams()
  const [products, setProducts] = useState([])
  const [inventories, setInventories] = useState([])
  // const [editProduct, setEditProduct] = useState({})
  const [error, setError] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  // const toggleDisplayEditForm = () => setEditProduct({})
  useEffect(() => {
    /* Load products from API get endpoint */
    new InvoiceApi()
      .apiInvoiceIdProductsGet(invoice_id)
      .then(({ body }) => {
        /* Add key property to each product */
        const productsWithKey = body['$values'].map((product) => ({
          ...product,
          key: product.productId
        }))
        setProducts(productsWithKey)
      })
      .catch((err) => { setError(err.message) })
  }, [invoice_id])
  const addGuiProduct = (product) => {
    setProducts((prev) => [{ ...product, key: product.productId }, ...prev])
  }
  // const updateGuiProduct = (productId, updatedProduct) => {
  //   setProducts((prev) =>
  //     prev.map((product) => {
  //       if (product.productId !== productId) return product
  //       return {
  //         key: product.key,
  //         productId,
  //         ...updatedProduct
  //       }
  //     })
  //   )
  // }

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">edit</span>}
            size="large"
            // onClick={() => setEditProduct(findProduct(record.customerId, products))}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => {
              deleteProduct(record.customerId, setProducts)
            }}
          />
        </Space>
      )
    }
  ]

  useEffect(() => {
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
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={products} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && (
        <AddProduct
          toggleDisplayForm={toggleDisplayForm}
          addGuiProduct={addGuiProduct}
          invoiceId={invoice_id}
          inventories={inventories}
        />
      )}
      {/* {Object.keys(editCustomer).length !== 0 && (
        <EditClient
          client={editCustomer}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiClient={updateGuiClient}
        />
      )} */}
    </section>
  )
}
