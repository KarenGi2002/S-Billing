import { Link, useParams } from 'react-router-dom'
import { AddNewButton } from '../../components'
import { useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import { deleteInvoice } from '../../helpers/invoice'
import { InvoiceApi } from '../../../services'

export const Invoices = () => {
  const { client_id } = useParams()
  const [invoices, setInvoices] = useState([])
  const [error, setError] = useState('')
  const addGuiInvoice = (invoice) => {
    setInvoices((prev) => [{ ...invoice, key: invoice.invoiceId }, ...prev])
  }

  const tableColumns = [
    {
      title: 'SubTotal',
      dataIndex: 'subTotal',
      key: 'subTotal'
    },
    {
      title: 'ISV',
      dataIndex: 'isv',
      key: 'isv'
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total'
    },
    {
      title: 'Creation Date',
      dataIndex: 'creationDate',
      key: 'creationDate'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => {
              deleteInvoice(record.invoiceId, setInvoices)
            }}
          />
          <Link to={`/clients/${client_id}/invoices/${record.invoiceId}/products`}>
            <span className="material-symbols-outlined">inventory</span>
          </Link>
        </Space>
      )
    }
  ]

  const body = {
    invoice: {
      subTotal: 0,
      isv: 0,
      total: 0,
      customerId: client_id
    }
  }
  /* Post invoice */
  const postInvoice = () => {
    new InvoiceApi()
      .apiInvoicePost(body)
      .then((response) => {
        const splittedDate = response.body.creationDate.split('-')
        addGuiInvoice({
          ...body.invoice,
          invoiceId: response.body.invoiceId,
          creationDate: splittedDate.slice(0, splittedDate.length - 1).join('-')
        })
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        alert('Invoice has been added successfully!')
      })
  }

  /* Load invoices from API get endpoint */
  useEffect(() => {
    new InvoiceApi()
      .apiInvoiceGet()
      .then(({ body }) => {
        /* Add key property to each invoice */
        const invoicesWithKey = body.map((invoice) => ({
          ...invoice,
          key: invoice.invoiceId
        }))
        setInvoices(invoicesWithKey)
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={postInvoice} />
      <Table dataSource={invoices} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
    </section>
  )
}
