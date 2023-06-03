import { useParams } from 'react-router-dom'

export const Articles = () => {
  const { inventory_id } = useParams()
  return (
    <>
      <h1>Articles for inventory {inventory_id}</h1>
      <p>/inventories/:inventory_id/articles</p>
    </>
  )
}
