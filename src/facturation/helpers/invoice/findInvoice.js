const findInvoice = (invoiceId, invoices) => {
  return invoices.find((obj) => obj.invoiceId === invoiceId) || {}
}

export { findInvoice }
