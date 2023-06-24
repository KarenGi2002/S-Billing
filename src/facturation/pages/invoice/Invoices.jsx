import { Link } from 'react-router-dom'
import { AddNewButton, TableButton } from '../../components'
import { useEffect, useState } from 'react'
import { Space, Table, message } from 'antd'
import { deleteInvoice } from '../../helpers/invoice'
import { InvoiceApi } from '../../../services'
import { createTableColumns } from '../../helpers/createTableColumns'

export const Invoices = () => {
  /* message api from antd */
  const [messageApi, contextHolder] = message.useMessage()
  const [invoices, setInvoices] = useState([])
  const [columns, setColumns] = useState([])
  const addGuiInvoice = (invoice) => { setInvoices((prev) => [{ ...invoice, key: invoice.invoiceId }, ...prev]) }

  const body = {
    invoice: {
      subTotal: 0,
      isv: 0,
      total: 0,
    }
  }

  const postInvoice = () => {
    new InvoiceApi()
      .apiInvoicePost(body)
      .then((response) => {
        addGuiInvoice({
          ...body.invoice,
          invoiceId: response.body.invoiceId,
          creationDate: response.body.creationDate.split('T')[0]
        })
        messageApi.open({ type: 'success', content: 'Invoice was addded successfully' })
      })
      .catch(() => {
        messageApi.open({ type: 'error', content: 'Couldn\'t add invoice to database' })
      })
  }
  const getInvoices = () => {
    new InvoiceApi()
    .apiInvoiceGet()
    .then(({ body }) => {
      /* Add key property to each invoice */
      const invoicesWithKey = body.map((invoice) => ({
        ...invoice,
        creationDate: invoice.creationDate.split('T')[0],
        key: invoice.invoiceId
      }))
      setInvoices(invoicesWithKey)
    })
    .catch(() => {
      messageApi.open({
        type: 'error',
        content: 'Couldn\'t read invoices from database',
      });
    })
  }
  
  /* run when component is mounted */
  useEffect(() => {
    getInvoices()
    setColumns(createTableColumns([
      { val: 'Sub Total' },
      { val: 'ISV' },
      { val: 'Total' },
      { val: 'Creation Date' },
      {
        val: 'Action',
        render: (_, record) => (
          <Space size="middle">
            <TableButton
              iconName="delete"
              handler={() => {
                deleteInvoice(record.invoiceId, setInvoices)
                .then(msg => {
                  messageApi.open({ type: 'success', content: msg })
                })
                .catch(err => {
                  messageApi.open({ type: 'error', content: err })
                })
              }}
            />
            <Link to={`/invoices/${record.invoiceId}/products`}>
              <span className="material-symbols-outlined">inventory</span>
            </Link>
          </Space>
        )
      }
    ]))
  }, [])

  return (
    <section className="container">
      {contextHolder}
      <AddNewButton toggleFormPopup={postInvoice} />
      <Table dataSource={invoices} columns={columns} />
    </section>
  )
}
