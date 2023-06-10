import { Button, Form, Input, Select } from 'antd'
import { ReportApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const AddReport = ({ toggleDisplayForm }) => {
    const [form] = Form.useForm()
    const [error, setError] = useState('')
    /* Create request body */
    const body = {
      customer: {
       
      }
    }
    
const onFinish = (values) => {
  /* Wrap form values into body request and add customer type property */
  body.report = {
    ...values,
  
  }
  
  new ReportApi()
  .apiReportPost(body)
  .then(() => {
    toggleDisplayForm()
  })
  .catch((err) => {
    setError(err)
  })
  .finally(() => {
    alert('Report has been added successfully!')
  })
}

return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Title"
          name="title"
          required
          tooltip="This is a required field"
          rules={[
            {
              required: true,
              message: 'Please input your title!'
            }
          ]}
          >
          <Input placeholder="e.g.: Reporte 13-2-2023" type="text" />
        </Form.Item>
        <Form.Item label="Content" name="content" tooltip="This is a required field">
          <Input placeholder="Folio: 202 serie:43 tipo:factura" type="text" />
        </Form.Item>
        <Form.Item label="TotalBills" name="totalbills" tooltip="This is a required field">
        <Input placeholder="TotalBills:1243" type="number" />
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