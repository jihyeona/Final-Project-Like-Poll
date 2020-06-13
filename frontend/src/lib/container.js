import React from 'react'
import styled from 'styled-components/macro'

export const ItemRow = styled.div`
@media (min-width: 575px) { 
  display: flex;
  direction: row;
  justify-content: flex-start;
  flex-flow: wrap;
  justify-content: space-evenly;
  margin: 25px;
}
`
export const Column = styled.div`
  display: flex;
  direction: column;
  justify-align: center;
`
export const ThemeContainer = styled.div`
width: 100%;
text-decoration: none;
position: relative;
@media (min-width: 575px) { 
  display: flex; 
  justify-content: center; 
}
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
@media (min-width: 575px) { 
  width: 80%; display: flex; 
  justify-content: center; 
}
`
export const ItemDiv = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ItemContainer = styled.div`
width: 100%;
border: 1px solid rgba(var(--b6a,219,219,219),1);
border-radius: 3px;
margin-bottom: 60px;
@media (min-width: 575px) { 
  width: 266px;
}
`

export const ItemText = styled.div`
margin: 10px;
overflow-wrap: break-word;
@media (min-width: 575px) { 
  width: 90%; 
} 
`
export const ListContainer = styled.div`
  width: 100%;
  margin: 1em auto;
  --background: #fafafa;
  --border: rgba(0, 0, 0, 0.125);
  --borderDark: rgba(0, 0, 0, 0.25);
  --borderDarker: rgba(0, 0, 0, 0.5);
  --bgColorH: 0;
  --bgColorS: 0%;
  --bgColorL: 98%;
  --fgColorH: 210;
  --fgColorS: 50%;
  --fgColorL: 38%;
  --shadeDark: 0.3;
  --shadeLight: 0.7;
  --shadeNormal: 0.5;
  --borderRadius: 0.125rem;
  --highlight: #306090;
  background: white;
  box-shadow: 0 1rem 1rem -0.75rem var(--border);
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px;
`
