// a card component that shows the topic of a poll.
// title, pollImage
// fetch from http://localhost:8080/polls(method:GET)
import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeImage } from '../lib/images'
import { ThemeContainer } from 'lib/container'

export const ThemeCard = ({ title, imageUrl, _id }) => {
  return (
    <Link to={`/polls/${_id}`} style={{textDecoration: 'none', color: 'white'}}>
        <ThemeContainer>
        <ThemeImage
          src={imageUrl}
          alt={title}
        />
        <h1>{title}</h1>
        </ThemeContainer>
    </Link>
  )
}
export default ThemeCard  