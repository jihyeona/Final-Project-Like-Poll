import React, { useState } from 'react'
import { Button, ToggleButton } from '../lib/button'
import { Input, ProfileForm } from '../lib/form'
import { ProfileMessage, ProfileText } from '../lib/headline'
import { InfoSection, ToggleDiv, ProfileDiv, ProfileContainer } from '../lib/container'
import { useDispatch, useSelector } from 'react-redux'
import ProfileImage from '../components/ProfileImage'
import NavbarLight from '../components/NavBar'
import LikeList from '../components/LikeList'
import { changepassword } from 'reducers/user'

export const MyPage = () => {
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.user.login.userName)
  const email = useSelector((store) => store.user.login.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [open, setOpen] = useState('true')
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
        <ProfileImage />
        <InfoSection>
          <ProfileMessage>Welcome {userName}!</ProfileMessage>
          <ProfileText>e-mail: {email}</ProfileText>      
  {!open ? <ToggleDiv onSubmit={(event) => handleChangePassword(event)}>
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
              onChange={(event) => setNewPassword(event.target.value) && setOpen(prev => !prev)}
            />
            <Button type='submit' title='Change password' />
  </ToggleDiv> : <ToggleButton onClick={()=> setOpen(prev => !prev)} title='Edit password'>Edit Password</ToggleButton>}
        </InfoSection>
        </ProfileDiv>
        <ProfileForm>
          <LikeList />
        </ProfileForm>
      </ProfileContainer>
    </>
  )
}

export default MyPage
