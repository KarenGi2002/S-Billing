import { InvoiceApi } from '../../../services'

const deleteInvoice = (invoiceId, setInvoices) => {
  new InvoiceApi()
    .apiInvoiceIdDelete(invoiceId)
    .then(() => {
      setInvoices((prev) => prev.filter((obj) => obj.invoiceId !== invoiceId))
    })
    .catch(() => {
      alert('Error deleting invoice from database, please try again later.')
    })
}

export { deleteInvoice }
