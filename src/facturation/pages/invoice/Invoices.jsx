import { NavLink } from 'react-router-dom'

export const Invoices = () => {
  return (
    <>
      <h1>Invoices</h1>
      <p>/reports/:report_id/invoices</p>
      <NavLink to="/invoice">Invoice</NavLink>
    </>
  )
}
