import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'assets/animation/poll.json'


export const VoteLottie = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='280px'
        height='280px'
        autoPlay
      />
    </>
  )
}