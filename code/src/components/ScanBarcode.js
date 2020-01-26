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

// If the scanning doesn't work, call fetchProduct with this instead  
const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead
const MILK_CODE = 7350038192021 //
const TEA_CODE = 8722700001232 //


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner
          className='scanner'
          onDetected={(code) => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))
          }} />
      )}
    </>
  )
}