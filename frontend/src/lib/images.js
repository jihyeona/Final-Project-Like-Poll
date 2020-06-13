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
  backgroundcolor: orange;
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

export const SmallImage = styled.img`
  width: 80px;
  height: 80px; 
  object-fit: cover;
  background-color: orange;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
  @media (min-width: 575px) { 
    width: 150px;
    height: 150px; 
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
@media (min-width: 575px) { 
  top: 40%;
  left: 20%; 
}
`