import React, { useState } from 'react'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchNutritionValues } from '../reducers/macros.js'
import { useDispatch } from 'react-redux'

const TESTCODE = '7310865071804' /** mjölk=7310865071804 kaviar=5218020031149*/
export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)

  const dispatch = useDispatch()

  /* Code to handle the detected */
  const handleOnDetected = (code) => {
    setShowScanner(false)
    console.log('Got barcode', code)
    dispatch(fetchNutritionValues(code))
  }

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner
          onDetected={(code) => handleOnDetected(code)} 
          //onClick={handleOnDetected(TESTCODE)} /* Uncomment this to skip the scan, the testcode is sent directly, for test purposes */
        />
      )}
    </>
  )
}