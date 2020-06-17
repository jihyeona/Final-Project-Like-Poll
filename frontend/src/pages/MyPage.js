import React, { useState } from 'react'
import { Button } from '../lib/button'
import { ProfileMessage, ProfileText, ProfileDiv, Input, ProfileForm } from '../lib/form'
import { useDispatch, useSelector } from 'react-redux'
import ProfileImage from '../components/ProfileImage'
import NavbarLight from '../components/NavBar'
import LikeList from '../components/LikeList'
import { ProfileContainer } from '../lib/container'
import { changepassword } from 'reducers/user'

export const MyPage = () => {
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.user.login.userName)
  const email = useSelector((store) => store.user.login.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handleChangePassword = (event) => {
    event.preventDefault()
    dispatch(changepassword(oldPassword, newPassword))
    setOldPassword('')
    setNewPassword('')
  }

  return (
    <>
      <ProfileContainer>
        <NavbarLight />
        <ProfileDiv>
          <ProfileMessage>Welcome {userName}!</ProfileMessage>
          <ProfileImage />
          <ProfileForm onSubmit={(event) => handleChangePassword(event)}>
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
          </ProfileForm>
        </ProfileDiv>
        <ProfileForm>
          <LikeList />
        </ProfileForm>
      </ProfileContainer>
    </>


  )
}

export default MyPage