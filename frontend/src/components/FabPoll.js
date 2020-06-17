import React from 'react'
import { Link } from 'react-router-dom'
import { FabButton, Plus } from 'lib/button'
<<<<<<< HEAD
=======
import styled from 'styled-components/macro'
>>>>>>> wednesday townhall session, fixed flow for changing password, fixed sorting the itemcards, cleand up some error messages

export const FabPoll = () => {
  return (
    <Link to={'/addpoll'} >
      <FabButton>
        <Plus src={require('../assets/plus-thin.svg')} alt='Add button' />
      </FabButton>
    </Link>
  )
}

