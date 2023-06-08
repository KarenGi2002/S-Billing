import { CustomerApi } from '../../../services'

const deleteClient = (customerId, setCustomers) => {
  new CustomerApi()
    .apiCustomerIdDelete(customerId)
    .then(() => {
      setCustomers((prev) => prev.filter((obj) => obj.customerId !== customerId))
    })
    .catch(() => {
      alert('Error deleting customer from database, please try again later.')
    })
}

export { deleteClient }
