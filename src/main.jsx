import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './facturation/components'
import { ErrorPage, Articles, Clients, Inventories, Invoices, Invoice } from './facturation/pages'
import { Login, Signup } from './auth/pages'
import './index.css'
import 'antd/dist/reset.css'

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
        path: '/clients/:client_id/invoices',
        element: <Invoices />
      },
      {
        path: '/clients/:client_id/invoices/:invoice_id/products',
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
    <RouterProvider router={router} />
  </React.StrictMode>
)
