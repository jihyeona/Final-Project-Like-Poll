import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProfilePic } from '../lib/images'
import { ImgWrapper } from '../lib/container'
import { ProfileImgButton, Button } from '../lib/button'
import { TopForm } from '../lib/form'
import { UpdateProfilePic } from 'reducers/user'

export const ProfileImage = () => {
  const dispatch = useDispatch()
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const image = useSelector((state) => state.user.login.profileImage)
  const fileInput = useRef()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(UpdateProfilePic(fileInput.current.files[0]))
  }

  return (
    <>
      <ImgWrapper>
        <ProfileImgButton onClick={() => setShowUpdateForm(!showUpdateForm)}>Update Profile Image</ProfileImgButton>
        {!image && <ProfilePic src={require('../assets/profile.png')} alt="profile picture"></ProfilePic>}
        {image && <ProfilePic src={image} alt="profile picture"></ProfilePic>}
      </ImgWrapper>
      {showUpdateForm &&
        <TopForm onSubmit={handleFormSubmit}>
          <label>
            <input type="file" ref={fileInput} />
          </label>
          <Button type="submit" title='Save'>
            Save
          </Button>
        </TopForm>
      }
    </>
  )
}

export default ProfileImage