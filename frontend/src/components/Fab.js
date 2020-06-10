import React from 'react'
import { Link } from 'react-router-dom'
import { FabButton, Plus } from 'lib/button'
import styled from 'styled-components/macro'

export const Fab = (pollId) => {
  return (
    <Link to='/additem' pollId={pollId}>
      <FabButton>
        <Plus src={require('../assets/plus-thin.svg')} alt='Add button' />
      </FabButton>
    </Link>
  )
}

