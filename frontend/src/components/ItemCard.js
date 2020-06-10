// a card that shows the option that you can like.
// name, background image, description, like button 

// you can click on the like button and then it will light up
// like button has counter 
// stretch goal: user A also likes this. (like in Facebook post)
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote } from '../reducers/user'
import { Thumbnail } from 'lib/images'

export const ItemCard = ({ name, description, imageUrl, _id }) => {

  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const itemId = _id
  const handleUpvote = (event) => {
    event.preventDefault()
    //dispatch thunk
    dispatch(upvote(userId, itemId))

  }

  return (
    <div>
      <Thumbnail
        src={imageUrl}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <button onClick={(event) => handleUpvote(event)}>upvote</button>
      </div>
    </div>
  )
}
export default ItemCard  