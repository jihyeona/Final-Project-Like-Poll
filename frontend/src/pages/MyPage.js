import React from 'react'
import { user } from '../reducers/user'
import { logout } from '../reducers/user'
import { Headline } from '../lib/headline'
import { InputButton, ProfileImg } from '../lib/button'
import { ProfileMessage, ProfileDiv, ProfileInfo } from '../lib/form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LikeList from '../components/LikeList'
import ProfileImage from '../components/ProfileImage'

export const MyPage = () => {
  const dispatch = useDispatch()
  // const secretMessage = useSelector((store) => store.user.login.secretMessage)
  const userName = useSelector((store) => store.user.login.userName)

  return (
    <ProfileInfo>
      <Headline title='profile' />
      <ProfileDiv>
        <ProfileMessage>Welcome {userName}!</ProfileMessage>
        <ProfileImage />
        {/* return the username, email, and as a stretch goal we can have a function to change password */}
        {/* <LikeList /> */}
        {/* {secretMessage && <ProfileMessage> {secretMessage} </ProfileMessage>} */}
        {/* <ProfileImg src='https://www.fillmurray.com/200/300' alt='profile picture' /> */}
        {/* <InputButton type='submit' onClick={() => dispatch(getSecretMessage())} value='Setting' /> */}
        <Link to='/login'><InputButton type='submit' onClick={() => dispatch(logout())} value='Log Out' /></Link>
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default MyPage