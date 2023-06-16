import { Button, Form, InputNumber, Select } from 'antd'
import PropTypes from 'prop-types'
import { ProductApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'
import { findArticleInInventory } from '../../helpers/article/'

export const AddProduct = ({ toggleDisplayForm, addGuiProduct, invoiceId, inventories }) => {
  const [form] = Form.useForm()
  const defaultArticle = inventories[0].options[0]
  const [articleSelect, setArticleSelect] = useState(defaultArticle)
  const handleArticleChanged = (val) => { setArticleSelect(findArticleInInventory(val)) }
  
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

    new ProductApi()
      .apiProductPost(body)
      .then((response) => {
        addGuiProduct({ ...body.product, productId: response.body })
        toggleDisplayForm()
        alert('Product has been added successfully!')
      })
      .catch(() => {
        alert('Error adding product to database, please try again later.')
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
            defaultValue={defaultArticle}
            onChange={handleArticleChanged}
            options={inventories}
          />
        </Form.Item>
        <Form.Item
          label={`Amount (${articleSelect.stockQuantity} ${articleSelect.name} in stock)`}
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
            max={articleSelect.stockQuantity}
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
}
