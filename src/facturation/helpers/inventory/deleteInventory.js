import { InventoryApi } from '../../../services'

const deleteInventory = (inventoryId, setInventories) => {
  new InventoryApi()
    .apiInventoryIdDelete(inventoryId)
    .then(() => {
      setInventories((prev) => prev.filter((obj) => obj.inventoryId !== inventoryId))
    })
    .catch(() => {
      alert('Error deleting customer from database, please try again later.')
    })
}

export { deleteInventory }
