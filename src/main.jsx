import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './facturation/components'
import { ErrorPage } from './facturation/pages'
import { Login, Signup } from './auth/pages'
import { Articles } from './facturation/pages/article/Articles'
import { Clients } from './facturation/pages/client/Clients'
import { Inventories } from './facturation/pages/inventory/Inventories'
import { Invoices } from './facturation/pages/invoice/Invoices'
import { Reports } from './facturation/pages/report/Reports'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Articles />
      },
      {
        path: '/articles',
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
        path: '/reports',
        element: <Reports />
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
