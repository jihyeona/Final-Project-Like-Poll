import React from 'react'
import styled from 'styled-components/macro'

export const ImgWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const ProfilePic = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-top: 20px;
  padding: 10px;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
`
export const Thumbnail = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  margin-top: 20px;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
  }
`
export const ThemeImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  ${ImgWrapper}:hover & {
    filter: brightness(15%);
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
  font-size: 17px;
  cursor: pointer;
  ${ImgWrapper}:hover & {
    display: block;
  }
`