import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import {productStore} from '../reducers/productStore'

export const ScanBarcode = () => {
  const [showScanner, setShowScanner] = useState(false)
  //const codes = useSelector((state) => state.productStore.scannedProducts);
  const [ products, setProducts ] = useState([]);
	const dispatch = useDispatch();


  const onDetected = (code) => {
		// console.log(`Code: ${code}`);
		fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
			.then((data) => data.json())
			.then((json) => {
				// console.log(json.status);
				// products.push(json);
				// console.log(products);
				if (json.status === 1) {
					products.push(json);
          // console.log('This is the useState:', products);
          setShowScanner(false)
          dispatch(productStore.actions.addProduct(products.find((item) => item.status === 1)));
				}
				
			});
	};

  return (
    <>
      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}

      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          onDetected(code)
        }} />
      )}
    </>
  )
}