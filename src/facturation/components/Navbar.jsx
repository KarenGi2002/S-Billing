import { Outlet } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <p>Navbar</p>
      </nav>

      <Outlet />
    </>
  )
}
