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
export const Row = styled.div`
direction: row;
display: flex;
flex-flow: column;
justify-items: center;
`
export const Column = styled.div`
  display: flex;
  direction: column;
  justify-align: center;
`
export const OverlayDiv = styled.div`
height: 270px;
witdh: 270px;
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
text-transform: uppercase;
font-size: 1.4em;
font-weight: 400;
text-decoration: none;
top: 25%;
left: 7%;
position: absolute;
color: #fafafa;
flex: 1;
overflow-wrap: break-word;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
@media (min-width: 575px) { 
  width: 80%; 
  display: flex; 
  justify-content: center; 
  font-size: 2em;
  top: 20%;
  left: 10%;
}
`
export const PollTitle = styled.h1`
display: flex;
text-align: center;
justify-self: center;
text-transform: uppercase;
font-size: 1.4em;
font-weight: 400;
text-decoration: none;
color: #232b2b;
flex: 1;
overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
@media (min-width: 575px) { 
  width: 80%; 
  display: flex; 
  justify-content: center; 
  font-size: 2em;
  top: 20%;
  left: 10%;
}
`
export const PollText = styled.h1`
display: flex;
text-align: center;
justify-self: center;
width: 80%;
font-size: 1.3em;
font-weight: 300;
text-decoration: none;
color: #232b2b;
flex: 1;
overflow-wrap: break-word;
  text-overflow: ellipsis;
@media (min-width: 575px) { 
  width: 80%; 
  display: flex; 
  justify-content: center; 
  font-size: 2em;
  top: 20%;
  left: 10%;
}
`
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ItemContainer = styled.div`
width: 100%;
border-radius: 3px;
margin-bottom: 60px;
@media (min-width: 575px) { 
  width: 266px;
  border: 1px solid rgba(var(--b6a,219,219,219),1);
}
`

export const ItemText = styled.div`
margin: 8px;
overflow-wrap: break-word;
display: flex;
direction: row;
align-items: baseline;
justify-content: flex-start;
flex-flow: wrap;
@media (min-width: 575px) { 
  width: 90%;
} 
`
export const ItemDescription = styled.div`
margin: 4px;
overflow-wrap: break-word;
display: flex;
direction: row;
align-items: baseline;
justify-content: space-evenly;
flex-flow: wrap;
@media (min-width: 575px) { 
  width: 90%; 
} 
`
export const ListContainer = styled.div`
  width: 100%;
  --background: white;
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
  background: #fafafa;
  box-shadow: 0 1rem 1rem -0.75rem var(--border);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px 6px;
  @media (min-width: 575px) { 
  justify-content: center;
  align-items: stretch;
  } 
`
export const LikeContainer = styled.div`
  width: 100%;
  background: #fafafa;
  box-shadow: 0 1rem 1rem -0.75rem var(--border);
  display: flex;
  flex-wrap: row wrap;
  border-radius: 6px 6px;
`
// --background: white;
//   --border: rgba(0, 0, 0, 0.125);
//   --borderDark: rgba(0, 0, 0, 0.25);
//   --borderDarker: rgba(0, 0, 0, 0.5);
//   --bgColorH: 0;
//   --bgColorS: 0%;
//   --bgColorL: 98%;
//   --fgColorH: 210;
//   --fgColorS: 50%;
//   --fgColorL: 38%;
//   --shadeDark: 0.3;
//   --shadeLight: 0.7;
//   --shadeNormal: 0.5;
//   --borderRadius: 0.125rem;
//   --highlight: #306090;