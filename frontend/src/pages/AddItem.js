import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from '../lib/form'
import { additem } from 'reducers/user'
import { useParams } from 'react-router-dom'

export const AddItem = () => {
  const dispatch = useDispatch()

  const fileInput = useRef()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const { pollId } = useParams()

  const handleItemSubmit = (e) => {
    e.preventDefault()
    //dispatch thunk
    dispatch(additem(name, description, fileInput, pollId))
    setName('')
    setDescription('')
  }

  return (
    <>
      {/* <h1>{pollId}</h1> */}
      <Form onSubmit={handleItemSubmit}>
        <label>
          Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Description
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
          Image
        <input type="file" ref={fileInput} />
        </label>

        <button type="submit">
          Add item
      </button>
      </Form>
    </>
  )
}

export default AddItem