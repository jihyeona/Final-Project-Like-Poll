import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlikeditems } from 'reducers/user'
import { ThumbText, ThumbWrapper, SmallImage } from 'lib/images'
import { Link } from 'react-router-dom'


export const LikeList = ({ img }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getlikeditems())
  }, [dispatch])

  const likedItemsArr = useSelector((store) => store.user.login.likedItems)

  return (
    <ThumbWrapper>
      {likedItemsArr &&
        likedItemsArr.map(item => (
          <Link to={`/polls/${item._id}`}>
            <SmallImage src={item.items.imageUrl} />
            <ThumbText>{item.items.name}</ThumbText>
          </Link>
        ))
      }
    </ThumbWrapper>
  )
}

export default LikeList