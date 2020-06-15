import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ProfileDiv, Input, Form } from '../lib/form'
import { ListContainer, Column } from '../lib/container'
import { Button } from '../lib/button'
import { additem } from 'reducers/user'
import { useParams, useHistory } from 'react-router-dom'
import { AddPollLottie } from '../components/AddPollLottie'
import NavbarLight from '../components/NavBar'

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
      {/* <h1>{pollId}</h1> */}
      <AddPollLottie />
      <Form onSubmit={handleItemSubmit}>
      <h4>Add an item with name, description and image.</h4>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} 
        placeholder='Name'/>
        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
        placeholder='Description' />

        <label>
          Choose image
        <input type="file" ref={fileInput} />
        </label>

        <Button type="submit">
          Add item
      </Button>
      </Form>
    </ListContainer>
  )
}

export default AddItem