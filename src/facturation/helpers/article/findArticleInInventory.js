export const findArticleInInventory = (value, inventories) => {
  for (let inventory of inventories) {
    const result = inventory.options.find((article) => article.value === value)
    if (result === undefined) continue
    return result
  }
  return inventories[0].options[0]
}
