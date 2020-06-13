import React from 'react'
import { ImgWrapper, LinkText } from '../lib/images'
import { SmCard } from 'components/SmCard'

export const LikeList = () => {
  // shows the list of things you’ve liked
  // SmallImages
  // stretch goal: when hovered, show the name of the image
  // stretch goal: when clicked, it redirects you to the poll page
  
  return (
    <ImgWrapper>
     <LinkText >TEXT title</LinkText>
     <SmCard/>
    </ImgWrapper>
  )
}

export default LikeList