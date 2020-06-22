import React from 'react'
import NavbarLight from '../components/NavBar'
import { AddPollContainer } from '../lib/container'
import { VoteLottie } from 'components/VoteLottie'
import { PollTitle, PollText } from '../lib/headline'

export const HowToUse = () => {
  return (
    <AddPollContainer>
      <NavbarLight />
      <VoteLottie />
      <PollTitle>Welcome to Heart Picks!</PollTitle>
      <PollText>Create polls where you and others can add options to pick from. It could be a poll for deciding a vacation destination with your friends, coming up with an after work plan, or finding out others' thoughts on general topics! A user can pick each option only once with the heart button, but can pick several options. The option that have got the most hearts will be presented on the top of the list automatically. You can add options with its name, an image and further description. Start creating your own polls and invite friends to join!</PollText>
    </AddPollContainer>
  )
}

export default HowToUse