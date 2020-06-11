  
// a card component that shows the topic of a poll.
// title, pollImage
// fetch from http://localhost:8080/polls(method:GET)
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeImage } from '../lib/images'
import { ThemeContainer, ThemeTitle } from 'lib/container'

export const ThemeCard = ({ title, imageUrl, _id }) => {
  return (
    <Link to={`/polls/${_id}`} style={{textDecoration: 'none', color: '#ffff'}}>
        <ThemeContainer>
        <ThemeImage
          src={imageUrl}
          alt={title}
        />
        <ThemeTitle>{title}</ThemeTitle>
        </ThemeContainer>
    </Link>
  )
}
export default ThemeCard  