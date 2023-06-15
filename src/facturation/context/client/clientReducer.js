import { customerTypes } from "./customerTypes";

export const clientReducer = (state = {}, action) => {
  const prevCustomers = state?.customers || []
  switch(action.type) {
    case customerTypes.setCurrent:
      return {
        ...state,
        currentUser: action.payload
      }
    case customerTypes.setFoundCurrent:
      return {
        ...state,
        currentUser: state?.customers?.find(customer => customer.customerId === action.payload) || {}
      }
    case customerTypes.clearCurrent:
      return {
        ...state,
        currentUser: {}
      }
    case customerTypes.setAll:
      return {
        ...state,
        customers: action.payload
      }
    case customerTypes.add:
      console.log([...prevCustomers, {...action.payload}])
      return {
        ...state,
        customers: [...prevCustomers, action.payload]
      }
    case customerTypes.update:
      return {
        ...state,
        customers: prevCustomers.map((customer) => {
          if (customer.customerId !== action?.payload?.customerId) return customer
          return {
            key: customer.key,
            customerId: action?.payload?.customerId,
            ...action?.payload?.updatedClient
          }
        })
      }
    case customerTypes.remove:
      return {
        ...state,
        customers: state?.customers?.filter((obj) => obj.customerId !== action.payload)
      }
    default:
      return state
  }
}
