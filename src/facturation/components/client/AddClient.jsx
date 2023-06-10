import { Button, Form, Input, Select } from 'antd'
import PropTypes from 'prop-types'
import { clientTypes } from '../../helpers/client'
import { CustomerApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const AddClient = ({ toggleDisplayForm, addGuiClient }) => {
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
    /* Wrap form values into body request and add customer type property */
    body.customer = {
      ...values,
      customerType: body.customer.customerType
    }

    new CustomerApi()
      .apiCustomerPost(body)
      .then((response) => {
        addGuiClient({ ...body.customer, customerId: response.body })
        toggleDisplayForm()
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        alert('Customer has been added successfully!')
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
              message: 'Please input your name!'
            }
          ]}
        >
          <Input placeholder="e.g.: Camilo" type="text" />
        </Form.Item>
        <Form.Item label="Address" name="address" tooltip="This is a required field">
          <Input placeholder="e.g.: Neighborhood Street No. 5" type="text" />
        </Form.Item>
        <Form.Item
          label="RTN"
          name="rtn"
          required
          tooltip="This is a required field"
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

AddClient.propTypes = {
  toggleDisplayForm: PropTypes.func,
  addGuiClient: PropTypes.func
}
