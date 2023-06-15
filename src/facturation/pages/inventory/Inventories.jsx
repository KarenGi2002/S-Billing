import { useEffect, useState } from 'react'
import { AddNewButton } from '../../components'
import { InventoryApi } from '../../../services'
import { Button, Space, Table } from 'antd'
import { AddInventory } from '../../components/inventory/AddInventory'

export const Inventories = () => {
  const [inventories, setInventories] = useState([])
  const [editInventory, setEditInventory] = useState({})
  const [error, setError] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)
  const toggleDisplayEditForm = () => setEditInventory({})
  const addGuiInventory = (inventory) => {
setInventories((prev) => [{...inventory, key: inventory?.inventoryId}, ...prev])
  }

  const updateGuiInventory = (InventoryId, updatedInventory) => {
    setInventories((prev) =>
      prev.map((Inventory) => {
        if (Inventory.InventoryId !== InventoryId) return Inventory
        return {
          key: Inventory.key,
          InventoryId,
          ...updatedInventory
        }
      })
    )
  }
  useEffect(() => {
    new InventoryApi()
      .apiInventoryGet()
      .then(({ body }) => {
        console.log(body)
        /* Add key property to each inventory */
        const inventoriesWithKey = body.map((inventory) => ({
          ...inventory,
          amount: inventory.articles["$values"].length,
          key: inventory.inventoryId
        }))
        setInventories(inventoriesWithKey)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])




  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">edit</span>}
            size="large"
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
          />
        </Space>
      )
    }
  ]


  return (

    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={inventories} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && <AddInventory toggleDisplayForm={toggleDisplayForm} addGuiInventory={addGuiInventory}/>}
      
    </section>
  )
}
