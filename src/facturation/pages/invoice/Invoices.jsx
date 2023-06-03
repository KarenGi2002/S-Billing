import { NavLink, useParams } from 'react-router-dom'

export const Invoices = () => {
  const { report_id } = useParams()
  return (
    <>
      <h1>Invoices for report {report_id}</h1>
      <p>/reports/:report_id/invoices</p>
      <NavLink to={`/reports/${report_id}/invoices/10`}>Invoice</NavLink>
    </>
  )
}
