import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { ArticleApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'
import { useParams } from 'react-router-dom'

export const EditArticle = ({ article, toggleDisplayForm, updateGuiArticle, messageApi  }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')
  const {inventory_id}=  useParams()
  /* Create request body */
const body = {
article: {

}
}


  const onFinish = (values) => {
    const { articleId, inventoryId, ...rest } = values;
 
     body.article = {
      ...rest,
 
       }

    new ArticleApi()
      .apiArticleIdPut(articleId, body)
      .then(() => {
        updateGuiArticle(articleId, body.article)
        console.log(body);
        toggleDisplayForm()
        messageApi.open({
          type: 'success',
          content: 'Article has been change successfully!',
        });
      })
      .catch((err) => {
        messageApi.open({
          type: 'error',
          content: 'Couldn\'t update article to database',
        });
      })
  }

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Article ID" name="articleId" initialValue={article.articleId}>
          <Input type="text" disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          required
          tooltip="This is a required field"
          initialValue={article.name}
          rules={[
            {
              required: true,
              message: 'Please input name o article!'
            }
          ]}
        >
          <Input placeholder="e.g.: other Article Name" type="text" />
        </Form.Item>
        <Form.Item
          label="StockQuantity"
          name="stockQuantity"
          required
          tooltip="This is a required field"
          initialValue={article.StockQuantity}
          rules={[
            {
              required: true,
              message: 'Please input amount this article!'
            }
          ]}
        >
          <Input placeholder="e.g.: other Article amount" type="text" />
        </Form.Item>
        <Form.Item
          label="CostPrice"
          name="costPrice"
          required
          tooltip="This is a required field"
          initialValue={article.CostPrice}
          rules={[
            {
              required: true,
              message: 'Please input cost this article!'
            }
          ]}
        >
          <Input placeholder="e.g.: other cost fot this Article " type="text" />
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

EditArticle.propTypes = {
  article: PropTypes.object.isRequired,
  toggleDisplayForm: PropTypes.func.isRequired,
  updateGuiArticle: PropTypes.func.isRequired
}
