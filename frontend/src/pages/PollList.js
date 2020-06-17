import React from 'react'
import NavbarLight from '../components/NavBar'
import { ThemesDiv, ThemeInfo } from '../lib/form'
import { ThemeCard } from '../components/ThemeCard'
import { useState, useEffect } from 'react'
import { ListContainer } from '../lib/container'
import { useDispatch, useSelector } from 'react-redux'
import { getpolls } from '../reducers/user'
import { FabPoll } from 'components/FabPoll'

export const PollList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getpolls())
  }, [dispatch])
  const polls = useSelector((store) => store.user.login.ongoingPolls)
  console.log(polls)

  return (
    <ListContainer>
      <NavbarLight />
      <ThemesDiv>
        <section>
          {polls &&
            polls.map(poll => (
              <ThemeCard {...poll} />
            ))
          }
        </section>
      </ThemesDiv>
      <FabPoll />
    </ListContainer>
  )
}

export default PollList