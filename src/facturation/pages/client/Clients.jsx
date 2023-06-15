import { useContext, useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { AddClient, AddNewButton, EditClient } from '../../components/'
import { findClient, clientTypes } from '../../helpers/client'
import { useNavigate } from 'react-router-dom'
import { ClientContext } from '../../context/client/ClientContext'

export const Clients = () => {
  const {
    customers, loadClients, onDeleteClient, onAddClient, onUpdateClient, onClientInvoicesOpen,
  } = useContext(ClientContext)
  const navigate = useNavigate()
  const [editCustomer, setEditCustomer] = useState({})
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const toggleDisplayEditForm = () => setEditCustomer({})
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
              if (!confirm(`Are you sure you want to delete customer ${record.name}`)) return
              onDeleteClient(record.customerId)
            }}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">receipt_long</span>}
            size="large"
            onClick={() => {
              onClientInvoicesOpen(record.customerId)
              navigate(`/clients/${record.customerId}/invoices`)
            }}
          />
        </Space>
      )
    }
  ]

  /* Load customers from API get endpoint */
  useEffect(() => { loadClients() }, [])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={customers} columns={tableColumns} />
      {displayForm && (
        <AddClient toggleDisplayForm={toggleDisplayForm} addGuiClient={onAddClient} />
      )}
      {Object.keys(editCustomer).length !== 0 && (
        <EditClient
          client={editCustomer}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiClient={onUpdateClient}
        />
      )}
    </section>
  )
}
