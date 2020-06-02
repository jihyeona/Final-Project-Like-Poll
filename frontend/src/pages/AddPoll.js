import React, { useState, useRef } from 'react'

const API_URL = 'http://localhost:8080/products'

export const AddPoll = () => {
  const fileInput = useRef()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('name', name)
    formData.append('description', description)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
        Submit
      </button>
    </form>
  )
}

export default AddPoll