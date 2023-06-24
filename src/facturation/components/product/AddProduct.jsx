import { Button, Form, InputNumber, Select } from 'antd'
import PropTypes from 'prop-types'
import { ProductApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'
import { findArticleInInventory } from '../../helpers/article/'

const getDefaultArticle = (inventories) => {
  for (let inventory of inventories) {
    if (inventory?.options?.length === 0) continue;
    return inventory?.options[0]
  }
  return {}
}

export const AddProduct = ({
  toggleDisplayForm, addGuiProduct, invoiceId, inventories,
  addPriceToSubTotal, addedArticles, addArticleName, messageApi
}) => {
  /* message api from antd */
  const [form] = Form.useForm()
  const defaultArticle = getDefaultArticle(inventories)
  const defaultArticleName = defaultArticle?.value
  const [articleSelect, setArticleSelect] = useState(defaultArticle)
  const handleArticleChanged = (val) => { setArticleSelect(findArticleInInventory(val, inventories)) }
  
  const onFinish = (values) => {
    const body = {
      product: {
        ...values,
        invoiceId,
        price: articleSelect?.costPrice + (articleSelect?.costPrice * 0.12),
        articleId: articleSelect.articleId
      }
    }
    const { price, amount } = body.product
    body.product.total = price * amount
    const added = addedArticles.find(name => name === articleSelect.name) || ''
    if (added !== '') {
      messageApi.open({
        type: 'warning', content: `${added} is already added in this invoice, consider updating it instead.`
      })
      return
    }
    new ProductApi()
      .apiProductPost(body)
      .then((response) => {
        // display article in user interface
        addGuiProduct({ ...body.product, name: articleSelect.name, productId: response.body })
        // add article name to the added articles
        addArticleName(articleSelect.name)
        // hide article form after adding it
        toggleDisplayForm()
        // add product price to subtotal
        addPriceToSubTotal(body.product.total)
        // display message
        messageApi.open({ type: 'success', content: 'Product added successfully' })
      })
      .catch(() => {
        messageApi.open({ type: 'error', content: 'Couldn\'t add product to database' })
      })
  }

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Product"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please select an article!'
            }
          ]}
        >
          <Select
            name="article"
            style={{ width: '100%' }}
            placeholder="Article"
            defaultValue={defaultArticleName}
            onChange={handleArticleChanged}
            options={inventories}
          />
        </Form.Item>
        <Form.Item
          label={`Amount (${articleSelect?.stockQuantity} ${articleSelect?.name} in stock)`}
          name="amount"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please input the amount!'
            }
          ]}
        >
          <InputNumber
            style={{
              width: '100%'
            }}
            min={1}
            max={articleSelect?.stockQuantity}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Popup>
  )
}

AddProduct.propTypes = {
  toggleDisplayForm: PropTypes.func.isRequired,
  addGuiProduct: PropTypes.func.isRequired,
  invoiceId: PropTypes.string.isRequired,
  inventories: PropTypes.arrayOf(PropTypes.object),
  addPriceToSubTotal: PropTypes.func.isRequired,
  addedArticles: PropTypes.arrayOf(PropTypes.string).isRequired,
  addArticleName: PropTypes.func.isRequired,
  messageApi: PropTypes.object.isRequired
}
