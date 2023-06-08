import { Button, Form, Input, Select } from 'antd'
import PropTypes from 'prop-types'
import clientTypes from './clientTypes'
import { CustomerApi } from '../../../services'
import { useState } from 'react'

export const AddClient = ({ toggleShowAddClientForm }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')
  /* Create request body */
  const body = {
    customer: {
      customerType: 0
    }
  }

  /* Update customer type when input select changes */
  const handleTypeChanged = (value) =>
    (body.customer.customerType = clientTypes.findIndex((obj) => obj.value === value))

  const onFinish = (values) => {
    /* Wrap form values into body request and add customer type property */
    body.customer = {
      ...values,
      customerType: body.customer.customerType
    }

    new CustomerApi()
      .apiCustomerPost(body)
      .then(() => {
        toggleShowAddClientForm()
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        alert('Customer has been added successfully!')
      })
  }

  return (
    <section className="popup">
      <div className="popup__container">
        <Button
          type="primary"
          shape="circle"
          icon={<span className="material-symbols-outlined">close</span>}
          size="large"
          onClick={toggleShowAddClientForm}
          style={{
            display: 'block',
            width: 'max-content',
            marginLeft: 'auto'
          }}
        />
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
      </div>
    </section>
  )
}

AddClient.propTypes = {
  toggleShowAddClientForm: PropTypes.func
}
