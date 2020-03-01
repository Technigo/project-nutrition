import React, { useState } from 'react'

import { BarcodeScanner } from 'components/BarcodeScanner'

import { useDispatch } from 'react-redux'
import { fetchProduct } from 'reducers/products'

import './ScanBarcode.css'

//const OATLY_CODE = 7394376615979 // If the scanning doesn't work, call fetchProduct with this instead

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()

  return (  
  <> 
    <section className="infoContainer">
      {!showScanner && (
        <> 
          <button 
          type='button'
          value='Show Scanner' 
          onClick={() => setShowScanner(true)}>
          Scan new barcode
        </button>
        </>  
      )}
    </section>      

      {showScanner && (
        <>
        <BarcodeScanner
          className='scanner'
          onDetected={code => {
            console.log('Got barcode', code)
            setShowScanner(false)
            dispatch(fetchProduct(code))  
          }}
        /> 
      </>  
      )}
  </>  
  )
}