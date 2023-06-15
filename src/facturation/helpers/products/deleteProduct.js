import { ProductApi } from '../../../services'

const deleteProduct = (productId, setProducts) => {
  new ProductApi()
    .apiProductIdDelete(productId)
    .then(() => {
      setProducts((prev) => prev.filter((obj) => obj.productId !== productId))
    })
    .catch(() => {
      alert('Error deleting invoice from database, please try again later.')
    })
}

export { deleteProduct }
