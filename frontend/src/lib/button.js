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
  color: #4f4f4f;
  background: #adbce6;
  text-align: center;
  font-size: 1.2em;
  font-size: 0.825rem;
  text-align: center;
  height: 2.5em;
  margin: 1em;
  border-radius: 250px;
  border:none;
  cursor: pointer;
  &:hover {
    background: #adbce6;
    color: white;
  }
`

export const ReadButton = styled.button`
height: 1.5em;
width: 1.5em;
border-radius: 100px;
border: none;
color: gray;
flex-direction: row;
display:flex;
`
export const ProfileImgButton = styled.button`
position: absolute;
display: none;
top: 30%;
z-index: 5;
color: white;
background: none;
border: none;
padding: 10px;
font-size: 12px;
overflow-wrap: break-word;
cursor: pointer;
${ImgWrapper}:hover & {
  display: block;
}
@media (min-width: 668px) { 
  position: absolute;
  display: none;
  top: 50%;
  z-index: 5;
  color: white;
  background: none;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
`
export const LinkText = styled.button`
position: absolute;
top: 20%;
z-index: 5;
color: white;
background: none;
border: none;
font-size: 12px;
cursor: pointer;
${ImgWrapper}:hover & {
  display: block;
}
@media (min-width: 668px) { 
  top: 40%;
  left: 20%; 
}
`

export const Button = ({ title }) => {
  return (
    <ButtonInput>
      {title}
    </ButtonInput>
  )
}


