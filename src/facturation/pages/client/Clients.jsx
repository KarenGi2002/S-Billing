import { useContext, useEffect, useState } from 'react'
import { Space, Table } from 'antd'
import { AddClient, AddNewButton, EditClient, TableButton } from '../../components/'
import { findClient, clientTypes } from '../../helpers/client'
import { ClientContext } from '../../context/client/ClientContext'
import { createTableColumns } from '../../helpers/createTableColumns'

export const Clients = () => {
  const {
    customers, loadClients, onDeleteClient, onAddClient, onUpdateClient,
  } = useContext(ClientContext)
  const [editCustomer, setEditCustomer] = useState({}) // customer to edit
  const [displayAddForm, setDisplayAddForm] = useState(false)
  const toggleShowAddForm = () => setDisplayAddForm((prev) => !prev)
  const toggleShowEditForm = () => setEditCustomer({})
  const [columns, setColumns] = useState([])

  /* Load customers from API get endpoint */
  useEffect(() => {
    loadClients()
    setColumns(createTableColumns([
      { val: 'Name' },
      { val: 'Address' },
      { val: 'RTN' },
      { val: 'Phone number' },
      {
        val: 'Customer type',
        render: (_, record) => clientTypes[record.customerType].value
      },
      {
        val: 'Action',
        render: (_, record) => (
          <Space size="middle">
            <TableButton iconName="edit" handler={() => setEditCustomer(findClient(record.customerId, customers))} />
            <TableButton
              iconName="delete"
              handler={() => {
                if (!confirm(`Are you sure you want to delete customer ${record.name}`)) return
                onDeleteClient(record.customerId)
              }}
            />
          </Space>
        )
      }
    ]))
  }, [loadClients, onDeleteClient])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleShowAddForm} />
      <Table dataSource={customers} columns={columns} />
      {displayAddForm && <AddClient toggleDisplayForm={toggleShowAddForm} addGuiClient={onAddClient} />}
      {Object.keys(editCustomer).length !== 0 && (
        <EditClient
          client={editCustomer}
          toggleDisplayForm={toggleShowEditForm}
          updateGuiClient={onUpdateClient}
        />
      )}
    </section>
  )
}
