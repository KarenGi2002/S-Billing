import { useCallback, useMemo, useReducer } from "react";
import { ClientContext } from "./ClientContext"
import PropTypes from 'prop-types';
import { clientReducer } from "./clientReducer";
import { CustomerApi } from "../../../services";
import { customerTypes } from "./customerTypes";

const init = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}
  return { customers: [], currentUser }
}

const isEmpty = (object) => (Object.keys(object).length === 0)

export const ClientProvider = ({ children }) => {
  const [currentUserState, dispatch] = useReducer(clientReducer, {}, init)

  const loadClients = useCallback(() => {
    return new Promise((resolve, reject) => {
      new CustomerApi()
        .apiCustomerGet()
        .then(({ body }) => {
          /* Add key property to each customer */
          const customersWithKey = body.map((customer) => ({
            ...customer,
            key: customer.customerId
          }))
          dispatch({type: customerTypes.setAll, payload: customersWithKey})
          resolve(customersWithKey)
        })
        .catch(() => {
          alert("Error while loading customers from database!")
          reject()
        })
    })
  }, [])

  const saveCurrent = (current) => {
    dispatch({type: customerTypes.setCurrent, payload: current})
    localStorage.setItem('currentUser', JSON.stringify(current))
  }

  const loadCurrentUser = useCallback((clientId) => {
    // if user access products page and theres no current user
    if (currentUserState?.currentUser?.customerType !== undefined) return
    // try to find the current user in the customers array
    let current = currentUserState?.customers?.find(customer => customer.customerId === clientId) || {}
    // if the customers array is empty and therefore the current customer is an empty object
    // try to find it in the local storage
    if (isEmpty(current)) current = JSON.parse(localStorage.getItem('currentUser')) || {}
    // if it is still empty
    // try to get it from the database
    if (isEmpty(current)) {
      loadClients().then((clients) => {
        current = clients.find(client => client.customerId === clientId)
        saveCurrent(current)
      }).catch((err) => { console.error(err) })
      return;
    }
    saveCurrent(current)
  }, [currentUserState?.currentUser?.customerType, currentUserState?.customers, loadClients])

  const onDeleteClient = useCallback((clientId) => {
    new CustomerApi()
    .apiCustomerIdDelete(clientId)
    .then(() => {
      dispatch({type: customerTypes.remove, payload: clientId})
      alert('Client was deleted successfully!')
    })
    .catch(() => {
      alert('Error deleting customer from database, please try again later.')
    })
  }, [])

  const onAddClient = useCallback((client) => {
    dispatch({ type: customerTypes.add, payload: {...client, key: client.customerId} })
  }, [])

  const onUpdateClient = useCallback((customerId, updatedClient) => {
    dispatch({ type: customerTypes.update, payload: {customerId, updatedClient} })
  }, [])

  const setCurrentFromId = useCallback((clientId) => {
    dispatch({ type: customerTypes.setFoundCurrent, payload: clientId })
  }, [])
  
  const providerValue = useMemo(() => ({
    ...currentUserState,
    loadClients,
    loadCurrentUser,
    onDeleteClient,
    onAddClient,
    onUpdateClient,
    setCurrentFromId
  }), [
    currentUserState, loadClients, loadCurrentUser, onDeleteClient, onAddClient, onUpdateClient, setCurrentFromId
  ])
  
  return (
    <ClientContext.Provider value={providerValue}>
      {children}
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
