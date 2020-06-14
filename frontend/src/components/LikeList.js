// shows the list of things you’ve liked
// thumbnails
// stretch goal: when hovered, show the name of the image
// stretch goal: when clicked, it redirects you to the poll page
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getlikeditems } from 'reducers/user'

export const LikeList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getlikeditems())
  }, [dispatch])

  const likedItemsArr = useSelector((store) => store.user.login.likedItems)
  const userId = useSelector((store) => store.user.login.userId)
  console.log(likedItemsArr)
  // make a new array of items objects that matches items.likes.userId === userId
  // const likedItems = likedItemsArr.filter(arr => arr.items.likes.userId === userId)
  // const likedItems = likedItemsArr.find({'items.likes.userId':userId})
  // console.log(likedItems)

  return (
    <h4>Here, return the thumnails of the items the user has liked.</h4>
  )
}

export default LikeList