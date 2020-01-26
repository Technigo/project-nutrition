import React, { useState } from 'react'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

//Button aand Input form styling

const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: darkorange;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 10px 5px;
  padding: 3px;
`
const HideButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: darkslategrey;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: darkorange;
  margin: 10px 5px;
  padding: 3px;
`
const Input = styled.input`
  width: 280px;
  height: 30px;
  background-color: white;
  text-align: left;
  /* border-radius: 5px; */
  font-size: 16px;
  color: darkblue;
  margin-left: 10px;
  padding: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
`

const Label = styled.div`
  /* background-color: white; */
  width: 350px;
  padding: 40px 20px;

`

const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: orange;
  text-align: center;
  line-height:14px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding: 3px;
`

export const InputForm = () => {
  const [showinputForm, setShowInputForm] = useState(false)
  const [code, setCode] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchProduct(code))
    setCode('')
  }

  return (
    <>
      {!showinputForm && (
        <Button type="button" onClick={() => setShowInputForm(true)}>
          Barcode search
        </Button>
      )}

      {showinputForm && (
        <HideButton type="button" onClick={() => setShowInputForm(false)}>
          Hide Barcode search
        </HideButton>
      )}

      {showinputForm && (
        <form onSubmit={handleSubmit}>
          <Label>
            <SearchButton
              className="button"
              type="submit"
            > <span role="img" arialabel="search" >🔎 </span>
            </SearchButton>

            <Input
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              handleSubmit={code => {
                console.log('Got barcode', code)
                setShowInputForm(false)
              }} />
          </Label>
        </form>
      )}


    </>
  )
}


