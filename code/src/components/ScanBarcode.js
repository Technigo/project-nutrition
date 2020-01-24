import React, { useState } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { fetchProduct, products } from 'reducers/products'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './scanner.css'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch  = useDispatch()
  const product = useSelector(state => state.products.product) 

  
  return (
    <>
      {!showScanner && 
      // !product.product &&
      (
<>
    {/* <div className="scan-container">
      <div className="scan-placeholder">
        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_9FZkDo.json"  background="transparent"  speed="0.5"  loop autoplay ></lottie-player>
      </div>
      </div> */}

        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
        </>
      )}

      {showScanner && (
        <>
        <BarcodeScanner className="scanner" onDetected={(code) => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
        <button type="button" id="cancel-button" onClick={() => setShowScanner(false)}>Cancel</button>
        </>
      )}

      {/* {!showScanner && product.product &&(
 <button type="button" onClick={() => setShowScanner(true)}>
 Scan again!
</button> */}

      {/* )} */}
    </>
  )
}