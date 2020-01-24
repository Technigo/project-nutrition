import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from ' reducers/products'
// import { ToggleSwitch } from 'components/ToggleSwitch'
import styled from "styled-components";



const Btn = styled.div`
  display: flex;
  flex-direction: row;
  // width: 500px;
  justify-content: center;
`
const Scanner = styled.div`
  // display: flex;
  // flex-direction: row;
  // width: 500px;
  justify-content: center;
`


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

// const callback = isOn => {
//     console.log("State changed", isOn);
//   }

  return (
    <>
      <Btn>
        {!showScanner && (
          // <ToggleSwitch isOn={false} onChange={callback} />
          <button type='button' onClick={() => setShowScanner(true)}>
            Show scanner
          </button>
     
      )}
      </Btn>
      <Scanner>
        {showScanner && (
          <BarcodeScanner 
          // Damien had parenthesis around code down below
            onDetected={code => {
              console.log('Got barcode', code)
                setShowScanner(false)
                //fetching the barcode from the reducer:products
                dispatch(fetchProduct(code))
          }} />
        )}
      </Scanner> 
    </>
  )
}
