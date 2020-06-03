import React from 'react'
import NavbarLight from '../components/NavBar'
import { ProfileDiv, ProfileInfo } from '../lib/form'


export const PollList = () => {

  return (
    <ProfileInfo>
      <NavbarLight />
      <ProfileDiv>
        <h4>Here, return the list of ongoing polls.</h4>
        {/* return list of component that is called ThemeCard  */}
      </ProfileDiv>
    </ProfileInfo>
  )
}

export default PollList