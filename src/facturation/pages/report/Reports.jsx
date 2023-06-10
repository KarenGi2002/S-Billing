import { useEffect, useState } from 'react'
import { AddReport, AddNewButton } from '../../components/'
import { Button, Space, Table } from 'antd'
import { ReportApi } from '../../../services'
import { EditReport } from '../../components/report/EditReport.jsx'

export const Reports = () => {
  const [reports, setReports] = useState([])
  const [editReport, setEditReport] = useState({})
  const [error, setError] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const toggleDisplayEditForm = () => setEditReport({})
  const updateGuidReport = (reportId, updatedReport) => {
    setReports((prev) =>
      prev.map((report) => {
        if (report.reportId !== reportId) return report
        return {
          key: report.key,
          reportId,
          ...updatedReport
        }
      })
    )
  }
  const tableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'Total Bills',
      dataIndex: 'totalBills',
      key: 'totalBills'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">edit</span>}
            size="large"
            onClick={() => setEditReport(findReport(record.reportId, customers))}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => deleteReport(record.reportId, setReports)}
          />
        </Space>
      )
    }
  ]

  /* Load report from API get endpoint */
  useEffect(() => {
    new ReportApi()
      .apiReportGet()
      .then(({ body }) => {
        /* Add key property to each report */
        const reportsWithKey = body.map((report) => ({
          ...report,
          key: report.reportId
        }))
        setReports(reportsWithKey)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])
  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={reports} columns={tableColumns} />
    
      {displayForm && <AddReport toggleDisplayForm={toggleDisplayForm} />}
      {Object.keys(editReport).length !== 0 && (
        <EditReport
          reports={editReport}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuidReport={updateGuidReport}
        />
      )}
    </section>
  )
}
