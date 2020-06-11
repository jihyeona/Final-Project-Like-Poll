import React from 'react'
import { Link } from 'react-router-dom'
import { FabButton, Plus } from 'lib/button'
import styled from 'styled-components/macro'

export const Fab = (props) => {
  const pollId = props.pollId
  return (
    <Link to={`/${pollId}/additem`} >
      <FabButton>
        <Plus src={require('../assets/plus-thin.svg')} alt='Add button' />
      </FabButton>
    </Link>
  )
}

