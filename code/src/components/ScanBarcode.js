import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { StyledButton } from './StyledButton'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/product'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {showScanner &&
        <BarcodeScanner onDetected={(code) => {
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }}
        />
      }

      {!showScanner &&
        <StyledButton onClick={() => setShowScanner(true)} buttonInfo="Scan product" />
      }
    </>
  )
}

