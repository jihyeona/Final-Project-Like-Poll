import React, { useState, useRef } from 'react'

const POLL_URL = 'http://localhost:8080/polls'

export const AddPoll = () => {
  const fileInput = useRef()
  const [title, setTitle] = useState('')
  const [color, setColor] = useState('')

  const handlePollSubmit = (e) => {
    e.preventDefault()
    fetch(POLL_URL, {
      method: 'POST',
      body: JSON.stringify({ title, color }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <form onSubmit={handlePollSubmit}>
      <label>
        Title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Choose color
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <button type="submit">
        Create a poll
      </button>
    </form>
  )
}

export default AddPoll