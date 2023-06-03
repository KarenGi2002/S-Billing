import { useParams } from 'react-router-dom'

export const Invoice = () => {
  const { report_id, invoice_id } = useParams()
  return (
    <>
      <h1>
        Invoice: {invoice_id} for report: {report_id}
      </h1>
      <p>/reports/:report_id/invoices/:invoice_id</p>
    </>
  )
}
