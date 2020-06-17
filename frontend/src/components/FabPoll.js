import React from 'react'
import { Link } from 'react-router-dom'
import { FabButton, Plus } from 'lib/button'

export const FabPoll = () => {
  return (
    <Link to={'/addpoll'} >
      <FabButton>
        <Plus src={require('../assets/plus-thin.svg')} alt='Add button' />
      </FabButton>
    </Link>
  )
}

