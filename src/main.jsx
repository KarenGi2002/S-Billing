import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './facturation/components'
import { ErrorPage, Articles, Clients, Inventories, Invoices, Invoice } from './facturation/pages'
import { Login, Signup } from './auth/pages'
import './index.css'
import 'antd/dist/reset.css'
import { ClientProvider } from './facturation/context/client/ClientProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Inventories />
      },
      {
        path: '/inventories/:inventory_id/Articles',
        element: <Articles />
      },
      {
        path: '/clients',
        element: <Clients />
      },
      {
        path: '/inventories',
        element: <Inventories />
      },
      {
        path: '/invoices',
        element: <Invoices />
      },
      {
        path: '/invoices/:invoice_id/products',
        element: <Invoice />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ClientProvider>
      <RouterProvider router={router} />
    </ClientProvider>
  </React.StrictMode>
)
