import { useState } from 'react'
import { AddClient, AddNewButton } from '../../components/'

export const Clients = () => {
  const [displayForm, setDisplayForm] = useState(false)
  const toggleDisplayForm = () => setDisplayForm((prev) => !prev)

  return (
    <section className="container">
      <AddNewButton toggleFormPopup={toggleDisplayForm} />
      {displayForm && <AddClient toggleDisplayForm={toggleDisplayForm} />}
    </section>
  )
}
