import React, { useState } from 'react'
import { Button } from '../lib/button'
import { ProfileMessage, ProfileText, ProfileDiv, ProfileInfo, Form, Input } from '../lib/form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileImage from '../components/ProfileImage'
import NavbarLight from '../components/NavBar'
import { ListContainer } from '../lib/container'
import LikeList from '../components/LikeList'

export const MyPage = () => {
  const dispatch = useDispatch()
  // const secretMessage = useSelector((store) => store.user.login.secretMessage)
  const userName = useSelector((store) => store.user.login.userName)
  const email = useSelector((store) => store.user.login.email)
  const [password, setPassword] = useState('')

  const handleChangePassword = () => {

  }


  return (
    <ListContainer>
      <NavbarLight />
      {/* <Headline title='profile' /> */}
      <ProfileDiv>
        <ProfileMessage>Welcome {userName}!</ProfileMessage>
        <ProfileImage />
        <Form onSubmit={(event) => handleChangePassword(event)}>
          <ProfileText>e-mail adress: {email}</ProfileText>
          <Input
            type='password'
            placeholder='current password'
            required
            value={password}
          // onChange={(event) => setOldPassword(event.target.value)}
          />
          <Input
            type='password'
            placeholder='new password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type='submit' title='Change password' />
          
        </Form>
        {/* return the username, email, and as a stretch goal we can have a function to change password */}
        <Form>
          <LikeList />
        </Form>
        {/* {secretMessage && <ProfileMessage> {secretMessage} </ProfileMessage>} */}
        {/* <InputButton type='submit' onClick={() => dispatch(getSecretMessage())} value='Setting' /> */}
        {/* <Link to='/login'><InputButton type='submit' onClick={() => dispatch(logout())} value='Log Out' /></Link> */}
      </ProfileDiv>
    </ListContainer>
  )
}

export default MyPage