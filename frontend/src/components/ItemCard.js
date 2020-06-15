// stretch goal: user A also likes this. (like in Facebook post)
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote, downvote } from '../reducers/user'
import { Thumbnail } from 'lib/images'
import { ItemText, ItemDescription, ItemContainer } from 'lib/container'
import { FiHeart } from 'react-icons/fi';

export const ItemCard = ({ name, description, imageUrl, _id, likes, pollId }) => {

  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const itemId = _id
  const manyLikes = likes.length
  const upvoted = likes.some(like => like.userId === userId)
  console.log(upvoted)
  const [isUpvoted, setIsUpvoted] = useState(upvoted)

  const handleUpvote = (event) => {
    event.preventDefault()
    if (upvoted) {
      dispatch(downvote(pollId, itemId, userId))
    }
    else if (!upvoted) {
      dispatch(upvote(userId, itemId))
    }
    setIsUpvoted(!isUpvoted)
  }

  return (
    <ItemContainer>
      <Thumbnail
        src={imageUrl}
        alt={name}
      />
      <ItemText>
        <FiHeart onClick={(event) => handleUpvote(event)} style={{ fill: upvoted ? 'red' : 'none' }}></FiHeart>
        <h4>{manyLikes} likes</h4>
        </ItemText>
        <ItemDescription>
          <h4>{name}</h4>
          <p>{description}</p>
      </ItemDescription>
    </ItemContainer>
  )
}
export default ItemCard   