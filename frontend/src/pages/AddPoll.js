import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo, Form } from '../lib/form'
import { addpoll } from '../reducers/user'

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
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <Form onSubmit={handlePollSubmit}>
          <label>
            Title
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Choose background image for poll
            <input type="file" ref={fileInput} />
          </label>

          <button type="submit">
            Create a poll
      </button>
        </Form>
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default AddPoll