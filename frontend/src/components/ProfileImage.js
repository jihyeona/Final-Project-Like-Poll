import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImgWrapper, ProfilePic, PicText } from '../lib/images'
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
        <PicText onClick={() => setShowUpdateForm(!showUpdateForm)}>Update Profile Image</PicText>
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