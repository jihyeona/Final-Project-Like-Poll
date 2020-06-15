// shows the list of things you’ve liked
// thumbnails
// stretch goal: when hovered, show the name of the image
// stretch goal: when clicked, it redirects you to the poll page
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlikeditems } from 'reducers/user'
import { LikeThumbs } from 'lib/images'
import { Form } from 'lib/form'

export const LikeList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getlikeditems())
  }, [dispatch])

  const likedItemsArr = useSelector((store) => store.user.login.likedItems)
  const userId = useSelector((store) => store.user.login.userId)
  console.log(likedItemsArr)
  //map through the likedItemsArr to get the items.name, items.description, items.imageUrl 
  //in the Thumbnail(or the LikeList styling component), show the name and description of the item when hovered
  //maybe link it to the poll?

  return (
    <div>
      {likedItemsArr && likedItemsArr.map(item => <LikeThumbs src={item.items.imageUrl} />)}
    </div>
  )
}

export default LikeList