import React, { useState } from 'react'
//import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

export const Inputs = () => {
  const [code, setCode] = useState('')
  //const dispatch = useDispatch()

  //Enter Barcode-number to start the fetch in Products.js

  const handleSubmit = (event) => {
    event.preventDefault()
    setCode('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <Button
          className="button"
          type="submit"
        > <span>🔎</span>
        </Button>

        <Input
          type="text"
          placeholder="Enter code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
      </Label>
    </form>
  )
}

const Input = styled.input`
  width: 280px;
  height: 30px;
  background-color: white;
  text-align: left;
  border-radius: 5px;
  font-size: 16px;
  color: darkblue;
  margin-left: 10px;
  padding: 5px;
`

const Label = styled.div`
  background-color: white;
  width: 350px;
  padding: 40px 20px;

`

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #8aa8e9;
  text-align: center;
  line-height:14px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  // margin-top: 25px;
  // margin-bottom: 50px;
  padding: 3px;
`