import { Button } from 'antd'
import { useState } from 'react'
import { AddClient } from '../../components/client/AddClient'

export const Clients = () => {
  const [showAddClientForm, setShowAddClientForm] = useState(false)
  const toggleShowAddClientForm = () => setShowAddClientForm((prev) => !prev)

  return (
    <section className="container">
      <Button
        type="primary"
        size="large"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.2rem',
          marginLeft: 'auto',
          marginBlock: '1rem'
        }}
        onClick={toggleShowAddClientForm}
      >
        New
        <span className="material-symbols-outlined">add</span>
      </Button>

      {showAddClientForm && <AddClient toggleShowAddClientForm={toggleShowAddClientForm} />}
    </section>
  )
}
