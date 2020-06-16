// shows the list of things you’ve liked
// thumbnails
// stretch goal: when hovered, show the name of the image
// stretch goal: when clicked, it redirects you to the poll page
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlikeditems } from 'reducers/user'
import { LikeThumbs, ThumbText, ThumbWrapper, SmallImage } from 'lib/images'
import { Link } from 'react-router-dom'


export const LikeList = ({ img }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getlikeditems())
  }, [dispatch])

  const likedItemsArr = useSelector((store) => store.user.login.likedItems)
  console.log(likedItemsArr)
  //map through the likedItemsArr to get the items.name, items.description, items.imageUrl 
  //in the Thumbnail(or the LikeList styling component), show the name and description of the item when hovered
  //maybe link it to the poll?

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