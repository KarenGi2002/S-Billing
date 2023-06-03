import { NavLink } from 'react-router-dom'

export const Inventories = () => {
  return (
    <>
      <h1>Inventories</h1>
      <NavLink to="/inventories/10/articles">Articles</NavLink>
    </>
  )
}
