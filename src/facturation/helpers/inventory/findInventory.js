const findInventory = (inventoryId, inventories) => {
    return inventories.find((obj) => obj.inventoryId === inventoryId) || {}
  }
  
  export { findInventory }
  