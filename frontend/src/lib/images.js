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
export const ProfileImg = styled.img`
border - radius: 6px;
`

export const Thumbnail = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
  @media (min-width: 575px) { 
    width: 266px;
    height: 266px; 
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
top: 50 %;
z - index: 5;
color: white;
background: none;
border: none;
font - size: 17px;
cursor: pointer;
${ImgWrapper}:hover & {
  display: block;
}
`