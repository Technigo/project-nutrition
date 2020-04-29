import React, { useState } from 'react'
import styled from 'styled-components'
import { BarcodeScanner } from './BarcodeScanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFood } from 'reducers/nutritioninfo'
import { LoadingLottie } from './LoadingLottie'
import { NutritionList } from './NutritionList'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <StartSection>
      {showScanner && (
        <BarcodeScanner
          className="camera"
          onDetected={(code) => {
            setShowScanner(false);
            dispatch(fetchFood(code));
          }}
        />
      )}
      {isLoading && <LoadingLottie />}
      {!isLoading && !showScanner && <NutritionList />}
      {!showScanner && (
        <Button type="button" onClick={() => setShowScanner(true)}>
          Scan!
        </Button>
      )}
    </StartSection>
  )
}

const StartSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  font-size: 30px;
  padding: 6px 10px;
  color: #FFD700;
  border-radius: 12px;
  background: blue;
  box-shadow: 3px 5px #FFD700;
  margin-top: 50px;
  text-transform: uppercase;
`