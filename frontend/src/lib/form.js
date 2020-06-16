import React from 'react'
import styled from 'styled-components/macro'

export const Register = styled.p`
  color: #262626;
  text-align: center;
`
export const ProfileMessage = styled.p`
  color: #262626;
  text-align: center;
  font-size: 1.2em;
`
export const ProfileText = styled.p`
  color: #4f4f4f;
  font-size: 0.825rem;
  margin-top: 2.5em;
`
export const Form = styled.form`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  border-radius: 6px 6px;
  box-shadow: 0 1rem 1rem -0.75rem var(--border);
  @media (min-width: 668px) { 
    width: 50%;
    margin: 2em 1em; 
  }
`
export const InfoDiv = styled.div`
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const Input = styled.input`
  height: 2.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 2px;
`
export const ProfileInfo = styled.div`
  width: 60%;
  margin: 1em auto;
  --background: white;
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
export const ThemeInfo = styled.div`
  width: 60%;
  margin: 1em auto;
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
export const PollForm = styled.form`
  width: 75%;
  display: flex;
  margin-bottom: 1em;
  flex-direction: column;
  border-radius: 6px 6px;
  justify-content: center;
  align-items: stretch;
  background-color: #c6c7d6;
  padding: 1em;
  box-shadow: 0 1rem 1rem -0.75rem var(--border);
  @media (min-width: 668px) { 
    width: 40%;
    margin: 1em auto; 
  }
`

export const ProfileDiv = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  @media (min-width: 668px) { 
    width: 50%;
    align-items: flex-start;
  }
`

export const ThemesDiv = styled.div`
  display: flex;
  background-color: none;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  @media (min-width: 668px) { 
    margin-top: 10em;
    margin-bottom: 8em;
  }
`
export const ProfileImgForm = styled.form`
  display: flex;
  padding: 2rem; 
`
export const SmallImgForm = styled.form`
  width: 100%;
  `
