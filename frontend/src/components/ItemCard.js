// stretch goal: user A also likes this. (like in Facebook post)
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote, downvote } from '../reducers/user'
import { Thumbnail } from 'lib/images'
import { ItemText, ItemDescription, ItemContainer } from 'lib/container'
import { FiHeart } from 'react-icons/fi';
import { deleteitem } from 'reducers/user'

export const ItemCard = ({ name, description, imageUrl, _id, likes, userId, pollId }) => {

  const dispatch = useDispatch()
  const loggedInUserId = useSelector((store) => store.user.login.userId)
  const itemCreatorId = userId
  const itemId = _id
  const manyLikes = likes.length
  const upvoted = likes.some(like => like.userId === loggedInUserId)
  console.log(upvoted)
  const [isUpvoted, setIsUpvoted] = useState(upvoted)

  const handleUpvote = (event) => {
    event.preventDefault()
    if (upvoted) {
      dispatch(downvote(pollId, itemId, loggedInUserId))
    }
    else if (!upvoted) {
      dispatch(upvote(loggedInUserId, itemId))
    }
    setIsUpvoted(!isUpvoted)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteitem(itemId, itemCreatorId))
  }

  return (
    <ItemContainer>
      <Thumbnail
        src={imageUrl}
        alt={name}
      />
      <ItemText>
        <FiHeart onClick={(event) => handleUpvote(event)} style={{ fill: upvoted ? 'red' : 'none' }}></FiHeart>
        {loggedInUserId === itemCreatorId && <button onClick={(e) => handleDelete(e)}>delete the item</button>}
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