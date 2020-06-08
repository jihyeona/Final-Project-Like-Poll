import React from 'react'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo } from '../lib/form'
import { ThemeCard } from '../components/ThemeCard'
import { useState, useEffect } from 'react'

export const PollList = () => {
  const POLL_URL = 'http://localhost:8080/polls'
  const [polls, setPolls] = useState([])

  useEffect(() => {
    fetch(POLL_URL, { method: 'GET' })
      .then(console.log('fetching the existing polls...'))
      .then(res => res.json())
      .then(json => setPolls(json))
      .then(console.log(polls))
  }, [])


  return (
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <h4>Here, return the list of ongoing polls.</h4>
        {/* return list of component that is called ThemeCard  */}
        <section>
          {
            polls.map(poll => (
              <ThemeCard {...poll} />
            ))
          }
        </section>
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default PollList