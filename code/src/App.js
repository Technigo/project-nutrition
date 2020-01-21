import React from 'react'
import { ScanBarcode } from './components/ScanBarcode'
import { Header } from './components/Header'
import { ProductList } from 'components/ProductList'

export const App = () => {
  return (
    <div>
      <Header />
      <ScanBarcode />
      Find me in src/app.js!
      {/* <ProductList /> */}
    </div>
  )
}
