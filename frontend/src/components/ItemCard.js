// stretch goal: user A also likes this. (like in Facebook post)
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote } from '../reducers/user'
import { Thumbnail } from 'lib/images'
import { ButtonHeart } from 'lib/button'
import { Row } from 'lib/container'
import { FiHeart } from 'react-icons/fi';

export const ItemCard = ({ name, description, imageUrl, _id, likes }) => {

  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const itemId = _id
  const manyLikes = likes.length
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
      <Row>
        <FiHeart onClick={(event) => handleUpvote(event)}></FiHeart>
        <h4>{manyLikes} likes</h4>
        <h4>{name}</h4>
        <p>{description}</p>
      </Row>
    </div>
  )
}
export default ItemCard  