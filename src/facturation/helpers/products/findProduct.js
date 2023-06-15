const findProduct = (productId, products) => {
  return products.find((obj) => obj.productId === productId) || {}
}

export { findProduct }
