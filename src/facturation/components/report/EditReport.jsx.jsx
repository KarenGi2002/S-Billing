import { Button, Form, Input} from 'antd'
import { ReportApi } from '../../../services'
import { useState } from 'react'
import { Popup } from '../Popup'

export const EditReport = ({ report, toggleDisplayForm, updateGuiReport }) => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')

  /* Create request body */
  const body = {
    customer: {
      
    }
  }

    new ReportApi()
      .apiReportIdPut(reportId, body)
      .then(() => {
        updateGuiReport(reportId, body.report)
        toggleDisplayForm()
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        alert('Report has been changed successfully!')
      })
  

  return (
    <Popup closePopup={toggleDisplayForm}>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item label="Report ID" name="reportId" initialValue={report.reportId}>
          <Input type="text" disabled />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          required
          tooltip="This is a required field"
          initialValue={report.reportId}
          rules={[
            {
              required: true,
              message: 'Please input your Title!'
            }
          ]}
        >
          <Input placeholder="e.g.: Invoice 21" type="text" />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
          tooltip="This is a required field"
          initialValue={report.reportId}
        >
          <Input placeholder="e.g: Folio: 202 serie:43 tipo:factura " type="text" />
        </Form.Item>
        <Form.Item
          label="TotalBills"
          name="totalbills"
          required
          tooltip="This is a required field"
          initialValue={report.reportId}
          rules={[
            {
              required: true,
              message: 'Please input your TotalBills!'
            }
          ]}
        >
          <Input placeholder="e.g.: TotalBills:1243" type="number" />
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
















