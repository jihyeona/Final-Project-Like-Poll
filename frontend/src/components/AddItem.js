import React, { useState, useRef } from 'react'
import { Form } from '../lib/form'

const ITEM_URL = 'http://localhost:8080/items'

export const AddItem = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleItemSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('description', description)

    fetch(ITEM_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <Form onSubmit={handleItemSubmit}>
      <label>
        Image
        <input type="file" ref={fileInput} />
      </label>

      <label>
        Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Description
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>

      <button type="submit">
        Add item
      </button>
    </Form>
  )
}

export default AddItem