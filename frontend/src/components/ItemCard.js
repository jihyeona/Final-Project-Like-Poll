// stretch goal: user A also likes this. (like in Facebook post)
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upvote, downvote } from '../reducers/user'
import { Thumbnail } from 'lib/images'
import { HeartButton } from 'lib/button'
import { Row, ItemContainer } from 'lib/container'
import { FiHeart } from 'react-icons/fi';

export const ItemCard = ({ name, description, imageUrl, _id, likes }, pollId) => {

  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const itemId = _id
  const manyLikes = likes.length
  const [upvoted, setUpvoted] = useState(false)
  const newPollId = pollId.pollId
  console.log(newPollId)

  const handleUpvote = (event) => {
    event.preventDefault()
    //toggle the state of setUpvoted 
    //problem: if the user has already liked the item, the initial state of upvoted should be true. how do we solve this?
    setUpvoted(!useState)
    //if upvoted is true, delete the like.(dispatch the downvote thunk.)
    if (upvoted) {
      dispatch(downvote(pollId, itemId, userId))
    }
    //if upvoted is false, dipatch the upvote thunk.
    else if (!upvoted) {
      dispatch(upvote(userId, itemId))
    }
  }

  return (
    <ItemContainer>
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
    </ItemContainer>
  )
}
export default ItemCard  