import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from '../lib/form'
import { additem } from 'reducers/user'
import { useParams, useHistory } from 'react-router-dom'
import { AddPollLottie } from '../components/AddPollLottie'
import NavbarLight from '../components/NavBar'
import { ListContainer } from '../lib/container'

export const AddItem = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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
    history.push(`/polls/${pollId}`)
  }

  return (
    <ListContainer>
      <NavbarLight />
      <AddPollLottie />
      <h4>Add an item with name, description and image.</h4>
      <Form onSubmit={handleItemSubmit}>
        <label>
          Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Description
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} maxlength="50" />
        </label>

        <label>
          Image
        <input type="file" ref={fileInput} />
        </label>

        <button type="submit">
          Add item
      </button>
      </Form>
    </ListContainer>
  )
}

export default AddItem