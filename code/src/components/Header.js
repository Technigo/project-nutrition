import React from 'react'
import { useSelector } from 'react-redux'
import { Image } from './Image'


export const Header = () => {
  const cameraOn = useSelector(state => state.ui.isCameraOn)
  
  return (
  <>
    {cameraOn && (
      <div>
        <Image />
      </div>
      )} 
    {!cameraOn && (
      <div>
        <Image />
      </div>
      )} 
  </>
  )
  }