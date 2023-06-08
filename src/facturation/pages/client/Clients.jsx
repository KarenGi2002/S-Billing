import { useEffect, useState } from 'react'
import { AddClient, AddNewButton } from '../../components/'
import { Button, Space, Table } from 'antd'
import { CustomerApi } from '../../../services'

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
    dataIndex: 'customerType',
    key: 'customerType'
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
          onClick={() => console.log(record.customerId)}
        />
        <Button
          type="primary"
          icon={<span className="material-symbols-outlined">delete</span>}
          size="large"
          onClick={() => console.log(record.customerId)}
        />
      </Space>
    )
  }
]

export const Clients = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const [customers, setCustomers] = useState([])
  const [error, setError] = useState('')
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)

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
        setError(err)
      })
  }, [])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={customers} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && <AddClient toggleDisplayForm={toggleDisplayForm} />}
    </section>
  )
}
