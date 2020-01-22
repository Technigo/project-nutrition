import React, { usestate } from 'react'
import { BarcodeScanner } from 'components/BarcodeScanner'
import { useDispatch } from 'react-redux'
import { fetchProduct } from 'Reducers/products'

// import ui from 'Reducers/ui'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = usestate(false)

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          show scanner
        </button>
      )}
    </>
  )
}

export const fetchProduct = (barcode) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('')
      .then((res) => json())
      .then((json) => {
        dispatch(products.actions.setProduct(json))
        dispatch(ui.actions.setLoading(fale))
      })
  }
}
