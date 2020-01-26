import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct } from 'reducers/products'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import './barcodeScanner.css'

//Button styling

const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: darkorange;
  text-align: center;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 5px;
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
  margin: 5px;
  padding: 3px;
`

// // If the scanning doesn't work, call fetchProduct with this instead  
// const OATLY_CODE = 7394376615979 // 
// const TEA_CODE = 8722700001232 //


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>


      {showScanner && (
        <BarcodeScanner
          className='scanner'
          onDetected={(code) => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }} />
      )}

      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <HideButton type="button" onClick={() => setShowScanner(false)}>
          Hide scanner
        </HideButton>
      )}
    </>
  )
}