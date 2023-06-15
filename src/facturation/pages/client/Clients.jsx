import { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { AddClient, AddNewButton, EditClient } from '../../components/'
import { CustomerApi } from '../../../services'
import { deleteClient, findClient, clientTypes } from '../../helpers/client'
import { Link } from 'react-router-dom'

export const Clients = () => {
  const [customers, setCustomers] = useState([])
  const [editCustomer, setEditCustomer] = useState({})
  const [error, setError] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const toggleDisplayEditForm = () => setEditCustomer({})
  const addGuiClient = (client) => {
    setCustomers((prev) => [{ ...client, key: client.customerId }, ...prev])
  }
  const updateGuiClient = (customerId, updatedClient) => {
    setCustomers((prev) =>
      prev.map((customer) => {
        if (customer.customerId !== customerId) return customer
        return {
          key: customer.key,
          customerId,
          ...updatedClient
        }
      })
    )
  }
  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'RTN',
      dataIndex: 'rtn',
      key: 'rtn'
    },
    {
      title: 'Phone',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber'
    },
    {
      title: 'Type',
      key: 'customerType',
      render: (_, record) => <>{clientTypes[record.customerType].value}</>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">edit</span>}
            size="large"
            onClick={() => setEditCustomer(findClient(record.customerId, customers))}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => {
              deleteClient(record.customerId, setCustomers)
            }}
          />
          <Link to={`/clients/${record.customerId}/invoices`}>
            <span className="material-symbols-outlined">receipt_long</span>
          </Link>
        </Space>
      )
    }
  ]

  /* Load customers from API get endpoint */
  useEffect(() => {
    new CustomerApi()
      .apiCustomerGet()
      .then(({ body }) => {
        /* Add key property to each customer */
        const customersWithKey = body.map((customer) => ({
          ...customer,
          key: customer.customerId
        }))
        setCustomers(customersWithKey)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={customers} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && (
        <AddClient toggleDisplayForm={toggleDisplayForm} addGuiClient={addGuiClient} />
      )}
      {Object.keys(editCustomer).length !== 0 && (
        <EditClient
          client={editCustomer}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiClient={updateGuiClient}
        />
      )}
    </section>
  )
}
