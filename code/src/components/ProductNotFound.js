import React from 'react'
import Lottie from "lottie-react-web";
import animation from "../animations/error.json";

export const ProductNotFound = () => {
  return (
    <div>
     <Lottie
          options={{
            animationData: animation,
            loop: false
          }}
          width="150px"
          />
    </div>
  )
}
