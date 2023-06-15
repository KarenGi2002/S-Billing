import { Button, Form, InputNumber, Select } from 'antd'
import PropTypes from 'prop-types'
import { ProductApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const AddProduct = ({ toggleDisplayForm, addGuiProduct, invoiceId, inventories }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(inventories[0].options[0])

  const findArticleInInventory = (value) => {
    for (let inventory of inventories) {
      const result = inventory.options.find((article) => article.value === value)
      if (result === undefined) continue
      return result
    }
    return inventories[0].options[0]
  }

  const handleArticleChanged = (val) => {
    setSelectedArticle(findArticleInInventory(val))
  }

  const onFinish = (values) => {
    const body = {
      product: {
        ...values,
        invoiceId,
        articleId: selectedArticle.articleId
      }
    }
    new ProductApi()
      .apiProductPost(body)
      .then((response) => {
        addGuiProduct({ ...body.product, productId: response.body })
        toggleDisplayForm()
        alert('Product has been added successfully!')
      })
      .catch((err) => {
        setError(err)
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
            style={{
              width: '100%'
            }}
            placeholder="Article"
            defaultValue={inventories[0].options[0]}
            onChange={handleArticleChanged}
            options={inventories}
          />
        </Form.Item>
        <Form.Item
          label={`Amount (${selectedArticle.stockQuantity} ${selectedArticle.name} in stock)`}
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
            max={selectedArticle.stockQuantity}
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          {/* Display error message */}
          {error !== '' && <p>{error}</p>}
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
  inventories: PropTypes.arrayOf(PropTypes.object)
}
