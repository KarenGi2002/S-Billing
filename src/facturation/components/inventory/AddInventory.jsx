import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { InventoryApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const AddInventory = ({ toggleDisplayForm, addGuiInventory }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')

  const onFinish = (values) => {
    /* Wrap form values into body request and add customer type property */
    const body = {
      inventory: {
        name: values.name.trim()
      }
    }

    new InventoryApi()
      .apiInventoryPost(body)
      .then(({text}) => {
        const newtext = text.replace(/"/g,"")
       addGuiInventory({...body.inventory,inventoryId:newtext, amount:0})

        toggleDisplayForm()
        alert('Inventory has been created successfully!')
      })
      .catch((err) => {
        setError(err)
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
              message: 'Please input inventory name!'
            }
          ]}

        >
          <Input placeholder="e.g.: My First Inventory" type="text" />
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

AddInventory.propTypes = {
  toggleDisplayForm: PropTypes.func.isRequired,
  addGuiInventory: PropTypes.func.isRequired
  
}
