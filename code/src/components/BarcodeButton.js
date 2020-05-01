import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchData } from  "reducers/data"
import styled from 'styled-components/macro'


export const BarcodeButton = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  
  
  return (
    <>
    <h2>Click the green button to start the scanner</h2>
      {!showScanner && ( 
        <BarcodeButtonStyle
          type='button'
          title= "Show scanner"  
          onClick={() => setShowScanner(true)}
        />
      )}
      
      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          //console.log('Got barcode', code)
          dispatch(fetchData(code))
          setShowScanner(false)
        }} />
      )}
    </>
  )
}

const BarcodeButtonStyle = styled.button`
  display: block;
  align-items: center;
  background-color: rgb(88,116,3);
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin: 30px auto;
  padding: 10px;
  width: 50px;
  height: 50px;
  color: black;
`
