import React from 'react'
import styled from 'styled-components/macro'

export const FabButton = styled.div`
  background-color: #FF69C6;
  border-radius: 50%;
  position: fixed;
  bottom: 15px;
  right: 15px;
  margin: 10px;
  height: 50px;
  width: 50px;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
`

export const Plus = styled.img`
  align-self: center;
`

export const ButtonInput = styled.button`
  margin-top: 0;
  color: #4f4f4f;
  text-align: center;
  font-size: 1.2em;
  font-size: 0.825rem;
  text-align: center;
  height: 2.5em;
  margin-top: 1em;
  border-radius: 300px;
  border:none;
  &:hover {
    background: palevioletred;
    color: white;
  }
`
export const InputButton = styled.input`
  margin-top: 0;
  padding: 0.5em 1.5em;
  color: #4f4f4f;
  text-align: center;
  font-size: 1.2em;
  font-size: 0.825rem;
  text-align: center;
  height: 2.5em;
  margin-top: 1em;
  border-radius: 300px;
  border: none;
  &:hover {
    background: palevioletred;
    color: white;
  } 
`

export const FiHeart  = styled.svg`
fill: blue;
`


export const Button = ({ title }) => {
  return (
    <ButtonInput>
      {title}
    </ButtonInput>
  )
}


