import React from 'react'
import Lottie from 'lottie-react-web'
import animation from 'assets/animation/pencil.json'


export const AddItemLottie = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='150px'
        height='150px'
        autoPlay
      />
    </>
  )
}