/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scanner } from 'reducers/scanner'

export const Header = () => {
  const dispatch = useDispatch()
  const showScanner = useSelector((state) => state.scanner.showScanner)
  return (
    <header>
      <h1>Does this product contain palm oil?</h1>
      <p>
        Scan the barcode to find out! 🐵
      </p>
      {!showScanner && (
        <button
          type="button"
          onClick={() => dispatch(scanner.actions.setShowScanner(true))}>
          Scan product
        </button>
      )}
    </header>
  )
}