import { Button, Form, Input, Select } from 'antd'
import PropTypes from 'prop-types'
import { clientTypes } from '../../helpers/client'
import { CustomerApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const EditClient = ({ client, toggleDisplayForm, updateGuiClient }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')

  /* Create request body */
  const body = {
    customer: {
      customerType: 0
    }
  }

  /* Update customer type when input select changes */
  const handleTypeChanged = (val) =>
    (body.customer.customerType = clientTypes.findIndex(({ value }) => value === val))

  const onFinish = (values) => {
    const { customerId, ...rest } = values
    /* Wrap form values into body request and add customer type property */
    body.customer = {
      ...rest,
      customerType: body.customer.customerType
    }

    new CustomerApi()
      .apiCustomerIdPut(customerId, body)
      .then(() => {
        updateGuiClient(customerId, body.customer)
        toggleDisplayForm()
        alert('Customer has been changed successfully!')
      })
      .catch((err) => {
        setError(err)
      })
  }

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Customer ID" name="customerId" initialValue={client.customerId}>
          <Input type="text" disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          required
          tooltip="This is a required field"
          initialValue={client.name}
          rules={[
            {
              required: true,
              message: 'Please input your name!'
            }
          ]}
        >
          <Input placeholder="e.g.: Camilo" type="text" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          tooltip="This is a required field"
          initialValue={client.address}
        >
          <Input placeholder="e.g.: Neighborhood Street No. 5" type="text" />
        </Form.Item>
        <Form.Item
          label="RTN"
          name="rtn"
          required
          tooltip="This is a required field"
          initialValue={client.rtn}
          rules={[
            {
              required: true,
              message: 'Please input your RTN!'
            }
          ]}
        >
          <Input placeholder="e.g.: 02101998003057" type="text" />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phoneNumber"
          required
          tooltip="This is a required field"
          initialValue={client.phoneNumber}
          rules={[
            {
              required: true,
              message: 'Please input your phone number!'
            }
          ]}
        >
          <Input placeholder="e.g.: 3534 9043" type="text" />
        </Form.Item>
        <Form.Item>
          <Select
            defaultValue={clientTypes[client.customerType].value}
            name="clientType"
            style={{
              width: '100%'
            }}
            placeholder="Client type"
            onChange={handleTypeChanged}
            options={clientTypes}
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

EditClient.propTypes = {
  client: PropTypes.object.isRequired,
  toggleDisplayForm: PropTypes.func.isRequired,
  updateGuiClient: PropTypes.func.isRequired
}
