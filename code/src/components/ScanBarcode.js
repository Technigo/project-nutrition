import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchProduct } from '../reducers/products'
import { ui } from '../reducers/ui'

import { BarcodeScanner } from './BarcodeScanner'
import { Heading } from './Text/Heading'
import { Paragraph } from './Text/Paragraph'
import { Button } from './Button'
import './scanbarcode.css'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <>
      <section className="scanner-section">
        <Heading level="h2">Check a product for allergens and traces</Heading>
        <Paragraph>Are you wondering if a product contains allergens or traces? Check if it does by scanning its barcode.</Paragraph>
        {!showScanner && (
          <Button
            onClick={() => {
              setShowScanner(true)
              dispatch(ui.actions.setCamera(true))
            }}
            text="Scan product" />
        )}
        {showScanner && (
          <BarcodeScanner className="scanner" onDetected={(code) => {
            setShowScanner(false)
            dispatch(ui.actions.setCamera(false))
            console.log('Got barcode', code)
            dispatch(fetchProduct(code))
          }} />
        )}
      </section>
    </>
  )
}