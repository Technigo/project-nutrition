import React from 'react'
import { useDispatch } from 'react-redux'
import '../styling/Input.css'

export const Input = ({onDetected}) => {
const dispatch = useDispatch()

  return ( 
    <label>
    {" "}
    Test codes here:{"7311070347272 "}
  

  <input type="text" 
    placeholder="Test Code Here"
    onChange={(e) => 
    onDetected(e.target.value)}>
    
      
    </input>

  </label>
  )
}