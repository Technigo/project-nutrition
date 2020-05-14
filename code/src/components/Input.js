import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import '../styling/Input.css'
import { foods, fetchFoods } from 'reducers/foods' 

export const Input = ({onDetected}) => {
const [barcodeInput, setBarcodeInput] = useState('')
const dispatch = useDispatch()

const handleChange = (event) => {
  event.preventDefault()
  dispatch(fetchFoods(barcodeInput))
  
  
}

  return ( 
    <label>
      {" "}
      Test codes here:{"7311070347272 "}
  
      <form onSubmit={handleChange}>
        <input type="text" 
          value={barcodeInput}
          placeholder="Test Code Here"
          onChange={(e) => 
          setBarcodeInput(e.target.value)}>
        </input>
        <button 
          type='submit'
          className='code-button'
          onSubmit={handleChange}
          >
            Add code 
        </button>
      </form>
    </label>
  )
}