import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, Input, Form } from '../lib/form'
import { addpoll } from '../reducers/user'
import { ListContainer, Column } from '../lib/container'
import { Button } from '../lib/button'
import { AddPollLottie } from '../components/AddPollLottie'

export const AddPoll = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const fileInput = useRef()
  const [title, setTitle] = useState('')


  const handlePollSubmit = (e) => {
    e.preventDefault()
    //dispatch thunk
    dispatch(addpoll(title, fileInput))
    setTitle('')
    history.push('/home')
  }

  return (
    <ListContainer>
      <NavbarLight />
      <ProfileDiv>
        <AddPollLottie />
         <Column>
          <Form onSubmit={handlePollSubmit}>
           <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
           placeholder='Title' 
           required />
           <label>Choose image
            <input type="file" ref={fileInput} 
            required />
           </label>
          <Button type="submit">
            Create
          </Button>
         </Form>
        </Column>
      </ProfileDiv>
    </ListContainer>
  )
}

export default AddPoll