import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from "../reducers/data"
import { Button } from 'lib/Button'
import styled from 'styled-components'

  export const InputCodeManually = () => {
    const [showInput, setInput] = useState(false)
    const [code, setCode] = useState([])
    const dispatch = useDispatch()
  
    const handleSubmit = e => {
      e.preventDefault()
      dispatch(fetchData(code))
      setCode([])
    }
  
    return (
      <>
      <h2>Or enter the barcode manually</h2>
        <form onSubmit={handleSubmit}>
            <Input
              type='text'
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder='Enter barcode number'
              required
            />
            <Button type='submit'
            title = "Find product" />
          </form>  
      </> 
    )
  }

  const Input = styled.input`
  display: block;
  align-items: center;
  background-color: #F2F2F2;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin: 10px auto;
  padding: 10px;
  `