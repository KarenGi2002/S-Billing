import { ProductApi } from '../../../services'

const deleteProduct = (productId, setProducts) => {
  return new Promise((resolve, reject) => {
    new ProductApi()
      .apiProductIdDelete(productId)
      .then(() => {
        setProducts((prev) => prev.filter((obj) => obj.productId !== productId))
        resolve('Product was deleted successfully')
      })
      .catch(() => {
        reject('Couldn\'t delete product from database')
      })
  })
}

export { deleteProduct }
