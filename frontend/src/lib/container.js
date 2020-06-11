import React from 'react'
import styled from 'styled-components/macro'

export const Row = styled.div`
  display: flex;
  direction: row;
  justify-content: space-around;
  align-items: baseline;
`
export const Column = styled.div`
  display: flex;
  direction: column;
`
export const ThemeContainer = styled.div`
width: 100%;
text-decoration: none;
position: relative;
`
export const ThemeTitle = styled.h1`
display: flex;
text-align: center;
justify-self: center;
font-size: 30px;
font-style: bold;
text-decoration: none;
top: 15%;
left: 7%;
position: absolute;
color: #fffff;
flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemContainer = styled.div`
width: 100%;
border: solid #E0E0E0;
border-radius: 3px;
`
