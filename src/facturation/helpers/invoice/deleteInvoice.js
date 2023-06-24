import { InvoiceApi } from '../../../services'

const deleteInvoice = (invoiceId, setInvoices) => {
  return new Promise((resolve, reject) => {
    new InvoiceApi()
      .apiInvoiceIdDelete(invoiceId)
      .then(() => {
        setInvoices((prev) => prev.filter((obj) => obj.invoiceId !== invoiceId))
        resolve('Invoice was deleted successfully')
      })
      .catch(() => {
        reject('Couldn\'t delete invoice from database')
      })
  })
}

export { deleteInvoice }
