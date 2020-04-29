import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { Input } from 'components/Input'
import { useDispatch } from 'react-redux'
import { fetchFoods } from 'reducers/foods'
import '../styling/ScanBarCode.css'


export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  const handleScan = (code) => {
    setShowScanner(false)
    dispatch(fetchFoods(code))
    console.log(code)
  }

  return (
    <>
    <Input onDetected={handleScan}/>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner 
        onDetected={handleScan} />
      )}
    </>
  )
}