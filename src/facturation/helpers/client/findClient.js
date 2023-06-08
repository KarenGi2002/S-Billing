const findClient = (customerId, customers) => {
  return customers.find((obj) => obj.customerId === customerId) || {}
}

export { findClient }
