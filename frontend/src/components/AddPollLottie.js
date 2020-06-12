import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'assets/animation/write.json'


export const AddPollLottie = () => {
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