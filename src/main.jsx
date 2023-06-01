import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './facturation/components'
import {
  ErrorPage,
  Articles,
  Clients,
  Inventories,
  Invoices,
  Reports,
  Invoice
} from './facturation/pages'
import { Login, Signup } from './auth/pages'
import './index.css'

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
        path: '/invoice',
        element: <Invoice />
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
