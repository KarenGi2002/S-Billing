import { Button, Form, Input, InputNumber } from 'antd'
import PropTypes from 'prop-types'
import { ProductApi } from '../../../services'
import { Popup } from '../Popup'

export const EditProduct = ({
  product, article, toggleDisplayForm, updateGuiProduct, addPriceToSubTotal, subtractPriceToSubTotal,
  changeArticleAmount, messageApi
}) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    const { productId, amount } = values
    /* Wrap form values into body request */
    const newAmount = (amount === undefined) ? product.amount : amount
    const body = {
      product: {
        productId,
        amount: newAmount,
        price: product.price,
        total: newAmount * product.price,
        articleId: product.articleId
      }
    }

    new ProductApi()
      .apiProductIdPut(productId, body)
      .then(() => {
        updateGuiProduct(productId, { ...product, ...body.product })
        // subtract previous product total from invoice subtotal
        subtractPriceToSubTotal(product.total)
        // add new product total to invoice subtotal
        addPriceToSubTotal(body.product.total)
        // hide popup form to edit products
        toggleDisplayForm()
        // restore stock quantity to previous value before creating this product
        changeArticleAmount(product.articleId, product.amount, 'add')
        // display message
        messageApi.open({ type: 'success', content: 'Product updated successfully' })
      })
      .catch(() => {
        messageApi.open({ type: 'error', content: 'Couldn\'t update product in database' })
      })
  }

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Product ID" name="productId" initialValue={product.productId}>
          <Input type="text" disabled />
        </Form.Item>
        <Form.Item
          label={`Amount (${article?.stockQuantity} ${article?.name} in stock)`}
          name="amount"
          rules={[
            {
              type: 'number',
              min: 1,
              max: article.stockQuantity,
              defaultValue: product.amout
            },
          ]}
        >
          <InputNumber style={{width: '100%'}} defaultValue={product.amount} />
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

EditProduct.propTypes = {
  product: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  toggleDisplayForm: PropTypes.func.isRequired,
  updateGuiProduct: PropTypes.func.isRequired,
  addPriceToSubTotal: PropTypes.func.isRequired,
  subtractPriceToSubTotal: PropTypes.func.isRequired,
  changeArticleAmount: PropTypes.func.isRequired,
  messageApi: PropTypes.object.isRequired
}
