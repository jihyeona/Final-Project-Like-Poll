// a card component that shows the topic of a poll.
// title, pollImage
// fetch from http://localhost:8080/polls(method:GET)
import React from 'react'
import { Link } from 'react-router-dom'

export const ThemeCard = ({ title, imageUrl, _id }) => {
  return (
    <Link to={`/polls/${_id}`}>
      <div>
        <img
          src={imageUrl}
          alt={title}
        />
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </Link>
  )
}
export default ThemeCard  