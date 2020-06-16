import React, { useState } from 'react'
import { Button } from '../lib/button'
import { ProfileMessage, ProfileText, ProfileDiv, ProfileInfo, Form, Input } from '../lib/form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileImage from '../components/ProfileImage'
import NavbarLight from '../components/NavBar'
import LikeList from '../components/LikeList'
import { ListContainer, LikeContainer } from '../lib/container'
import { changepassword } from 'reducers/user'

export const MyPage = () => {
  const dispatch = useDispatch()
  // const secretMessage = useSelector((store) => store.user.login.secretMessage)
  const userName = useSelector((store) => store.user.login.userName)
  const email = useSelector((store) => store.user.login.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleChangePassword = (event) => {
    event.preventDefault()
    //dispatch the thunk to fist check if the password is correct, then update the password with findOneandUpdate
    dispatch(changepassword(oldPassword, newPassword))
    setOldPassword('')
    setNewPassword('')
  }


  return (
    <>
      <ListContainer>
        <NavbarLight />
        <ProfileDiv>
          <ProfileMessage>Welcome {userName}!</ProfileMessage>
          <ProfileImage />
          <Form onSubmit={(event) => handleChangePassword(event)}>
            <ProfileText>e-mail adress: {email}</ProfileText>
            <Input
              type='password'
              placeholder='current password'
              required
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
            <Input
              type='password'
              placeholder='new password'
              required
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <Button type='submit' title='Change password' />
          </Form>
        </ProfileDiv>
      </ListContainer>
      <LikeContainer>
        <LikeList />
      </LikeContainer>
      {/* {secretMessage && <ProfileMessage> {secretMessage} </ProfileMessage>} */}
      {/* <InputButton type='submit' onClick={() => dispatch(getSecretMessage())} value='Setting' /> */}
    </>


  )
}

export default MyPage