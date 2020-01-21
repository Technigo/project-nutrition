import React from 'react'
// import { BarcodeScanner } from './components/BarcodeScanner'
import { ScanBarcode } from './components/ScanBarcode'
// import { ProductList } from 'components/ProductList'
import { Header } from 'components/header.js'


export const App = () => {
  return (
    <div>
      <Header />
      {/* <BarcodeScanner /> */}
      <ScanBarcode />

      {/* <ProductList /> */}
      Find me in src/app.js!
    </div>
  )
}
