const findProductArticle = (articleId, inventories) => {
  for (let inventory of inventories) {
    const result = inventory.options.find((article) => article.articleId === articleId)
    if (result === undefined) continue
    return result
  }
  return inventories[0].options[0]
}

export { findProductArticle }
