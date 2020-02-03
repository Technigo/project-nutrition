import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components/macro'

const h1 = styled.h1`
display: inline-flex;
justify-content: center;
text-align: center;

`
const Button = styled.button`
  display: flex;
  flex-direction: row;
  text-align: center;
  justifycontent: center;
  font-size: 1em;
  margin-bottom: 0.50em;
  margin-top: 1em;
  padding: 0.50em 1em;
  border: 2px solid #bceaef;
  background: #bceaef;
  color:  darkslategrey;
  border-radius: 3px;
  border: 1px solid slategrey;
  transition: all 0.5s;
  cursor: pointer;
`
const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-size: cover; 
  margin: 0 auto;
  width: 100%;
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