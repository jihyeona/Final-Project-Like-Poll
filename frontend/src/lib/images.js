import React from 'react'
import styled from 'styled-components/macro'

export const ImgWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`

export const ProfilePic = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-top: 20px;
  ${ImgWrapper}:hover & {
    filter: brightness(20%);
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