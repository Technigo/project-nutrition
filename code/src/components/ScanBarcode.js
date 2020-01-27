import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchNutritionValues } from '../reducers/macros.js'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'

const TESTCODE = '7310865071804' /** mjölk=7310865071804 kaviar=5218020031149*/
export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()

  /* Code to handle the detected */
  const handleOnDetected = (code) => {
    setShowScanner(false)
    dispatch(fetchNutritionValues(code))
  }

  return (
    <>
      {!showScanner && (
        <Button 
          variant="contained" 
          onClick={() => setShowScanner(true)} 
          disableElevation
          color="primary"
        >
          Show scanner
        </Button>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => handleOnDetected(code)} 
          //onClick={handleOnDetected(TESTCODE)} /* Uncomment this to skip the scan, the testcode is sent directly, for test purposes */
          className="scanner"
        />
      )}
    </>
  )
}