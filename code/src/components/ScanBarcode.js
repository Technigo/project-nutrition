import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'
import styled from 'styled-components'
import { Button } from 'library/Button'
import './css/scanbarcode.css'

const Wrapper = styled.section``

const CameraContainer = styled.div``

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Open camera to scan
        </Button>
      )}

      {showScanner && (
        <CameraContainer>
          <BarcodeScanner
            className="scanner"
            onDetected={(code) => {
              setShowScanner(false)
              dispatch(fetchProduct(code))
            }}
          />
        </CameraContainer>
      )}
    </Wrapper>
  )
}
