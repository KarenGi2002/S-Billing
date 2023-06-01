import { Outlet, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/inventories">Inventories</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>

      <Outlet />
    </>
  )
}
