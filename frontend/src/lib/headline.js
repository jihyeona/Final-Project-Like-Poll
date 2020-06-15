import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

export const ThemeTitle = styled.h1`
font-family: "Roboto", sans-serif;
color: #262626;
text-transform: uppercase;
`
export const Title = styled.h1`
background-color: blue; 
padding: 2em 3em;
margin-top: 0;
color: white;
text-align: center;
font-size: 1.2em;
text-transform: uppercase;
border-radius: 6px 6px 0 0;
`
const MovingBackground = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`
export const AnimationTitle = styled.h1`
background-size: 200% 200%;
background-image: linear-gradient(270deg, #647DEE,#7F53AC);
animation: ${MovingBackground} 15s ease infinite;
padding: 2em 3em;
margin-top: 0;
color: white;
text-align: center;
font-size: 1.2em;
text-transform: uppercase;
border-radius: 6px 6px 0 0;
`
export const Headline = ({title}) => {
  return (
    <AnimationTitle>
      {title}
    </AnimationTitle>
  )
}

