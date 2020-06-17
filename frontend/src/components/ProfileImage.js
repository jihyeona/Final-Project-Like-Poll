import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProfilePic } from '../lib/images'
import { ImgWrapper } from '../lib/container'
import { ProfileImgButton } from '../lib/button'
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
        <form onSubmit={handleFormSubmit}>
          <label>
            <input type="file" ref={fileInput} />
          </label>
          <button type="submit">
            Change Profile Image
          </button>
        </form>
      }
    </>
  )
}

export default ProfileImage