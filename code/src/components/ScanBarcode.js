import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from ' reducers/products'
import styled from "styled-components/macro"

const Button = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  justifycontent: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bceaef;
  background: #bceaef;
  color: white;
  border-radius: 3px;
  transition: all 0.5s;
  cursor: pointer;
`
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background:  #e5faf5;
`


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <Btn>
        {!showScanner && (
          <Button type='button' onClick={() => setShowScanner(true)}>
            Show scanner
          </Button>
      
      )}
    </Btn>
   
        {showScanner && (
          <BarcodeScanner 
            className='scanner' 
            onDetected={code => {
              console.log('Got barcode', code)
                setShowScanner(false)
                //fetching the barcode from the reducer:products
                dispatch(fetchProduct(code))
          }} />
        )}
   
    </>
  )
}
