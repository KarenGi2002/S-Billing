import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { ArticleApi } from '../../../services'
import { Popup } from '../Popup'
import { useParams } from 'react-router-dom'



export const AddArticle = ({ toggleDisplayForm, addGuiArticle, messageApi }) => {
  const [form] = Form.useForm()
  const {inventory_id}=  useParams()


  const body = {
    article: {

    }
  }
  const onFinish = (values) => {
    /* Wrap form values into body request and add customer type property */
   body.article = {
   ... values,
  inventoryId: inventory_id
    }

    new ArticleApi()
      .apiArticlePost(body)
      .then(({text}) => {
        const newtext = text.replace(/"/g,"")
        addGuiArticle({...body.article, articleId:newtext, key:newtext})
        toggleDisplayForm()
        messageApi.open({
          type: 'success',
          content: 'Article has been added successfully!',
        });
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Couldn\'t add article to database',
        });
      })
  }

  return (

    <Popup closePopup={toggleDisplayForm}>
           <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Name"
          name="name"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please input article name!'
            }
          ]}

        >
          <Input placeholder="e.g.: My First Article" type="text" />
        </Form.Item>

        <Form.Item
          label="StockQuantity"
          name="stockQuantity"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please input amount this article!'
            }
          ]}
        >
          <Input placeholder="e.g.: 18" type="text" />
        </Form.Item>
        <Form.Item
          label="CostPrice"
          name="costPrice"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please input cost this article!'
            }
          ]}

        >
          <Input placeholder="e.g.: 1.5" type="text" />
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

AddArticle.propTypes = {
  toggleDisplayForm: PropTypes.func.isRequired,
  addGuiArticle: PropTypes.func.isRequired
  
}
