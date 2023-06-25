import { InventoryApi } from '../../../services'

const deleteInventory = (inventoryId, setInventories, messageApi) => {
  new InventoryApi()
    .apiInventoryIdDelete(inventoryId)
    .then(() => {
      setInventories((prev) => prev.filter((obj) => obj.inventoryId !== inventoryId))
      messageApi.open({
        type: 'success',
        content: 'Inventory has been delete successfully!',
        
      });
    })

    .catch(() => {
      messageApi.open({
        type: 'success',
        content: 'Inventory hasn\'t been delete error!',
      });
    })
}

export { deleteInventory }
