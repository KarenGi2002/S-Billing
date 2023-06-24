import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import { InventoryApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const EditInventory = ({ inventory, toggleDisplayForm, updateGuiInventory }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')

  /* Create request body */
const body = {

}


  const onFinish = (values) => {
    const { inventoryId, ...rest } = values;
 
     body.inventory = {
      ...rest,
      inventory: inventory.name
       }

    new InventoryApi()
      .apiInventoryIdPut(inventoryId, body)
      .then(() => {
        updateGuiInventory(inventoryId, body.inventory)
        toggleDisplayForm()
        alert('Inventory has been changed successfully!')
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Inventory ID" name="inventoryId" initialValue={inventory.inventoryId}>
          <Input type="text" disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          required
          tooltip="This is a required field"
          initialValue={inventory.name}
          rules={[
            {
              required: true,
              message: 'Please input names o inventory!'
            }
          ]}
        >
          <Input placeholder="e.g.: other Inventory Name" type="text" />
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

EditInventory.propTypes = {
  inventory: PropTypes.object.isRequired,
  toggleDisplayForm: PropTypes.func.isRequired,
  updateGuiInventory: PropTypes.func.isRequired
}
