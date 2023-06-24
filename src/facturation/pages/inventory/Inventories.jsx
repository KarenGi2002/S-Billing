import { useEffect, useState } from 'react'
import { AddNewButton, EditInventory,  } from '../../components'
import { InventoryApi } from '../../../services'
import { Button, Space, Table, } from 'antd'
import { findInventory, deleteInventory } from '../../helpers/inventory'
import { AddInventory } from '../../components/inventory/AddInventory'
import { Link } from 'react-router-dom'

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

  const updateGuiInventory = (inventoryId, updatedInventory) => {
    setInventories((prev) =>
      prev.map((inventory) => {
        if (inventory.inventoryId !== inventoryId) return inventory
        return {
          key: inventory.key,
          inventoryId,
          ...updatedInventory
        }
      })
    )
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { body } = await new InventoryApi().apiInventoryGet();
        const inventoriesWithKey = body.map((inventory) => ({
          ...inventory,
          key: inventory.inventoryId
        }));
        setInventories(inventoriesWithKey);
      } catch (err) {
        setError(err.message);
      }
    };
  
    fetchData();
  }, []);
  

  
  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
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
            onClick={() => setEditInventory(findInventory(record.inventoryId, inventories))}
          />
          <Button
            type="primary"
            icon={<span className="material-symbols-outlined">delete</span>}
            size="large"
            onClick={() => {deleteInventory(record.inventoryId, setInventories)}}
            
          />
           <Link to={`/inventories/${record.inventoryId}/Articles`}>
            <span className="material-symbols-outlined">receipt_long</span>
          </Link> 
        </Space>
      )
    }
  ]


  return (

    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      <Table dataSource={inventories} columns={tableColumns} />
      {error !== '' && <p>{error}</p>}
      {displayForm && ( 
      <AddInventory toggleDisplayForm={toggleDisplayForm} addGuiInventory={addGuiInventory}/>)}
      {Object.keys(editInventory).length !== 0 && (
        <EditInventory
          inventory={editInventory}
          toggleDisplayForm={toggleDisplayEditForm}
          updateGuiInventory={updateGuiInventory}
        />
      )}
    </section>
  )
}
