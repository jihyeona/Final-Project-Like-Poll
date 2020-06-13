import React from 'react'
import styled from 'styled-components/macro'

export const ImgWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const ProfilePic = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-top: 20px;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
  @media (min-width: 575px) { 
    width: 266px;
    height: 266px; 
  }
`

export const LikeThumbs = styled.img`
  width: 15em;
  height: 15em;
  object-fit: cover;
  &:hover {
    filter: brightness(60%);
  }
`
export const ThemeImage = styled.img`
  width: 100%;
  height: 10rem;
  display: block;
  object-fit: cover;
  position: relative;
  @media (min-width: 575px) { 
    width: 60%; 
  }
`

export const PicText = styled.button`
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
${ImgWrapper}:hover & {
  display: block;
}
`