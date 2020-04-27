import React from "react";
import { useDispatch } from 'react-redux'
import { productsList } from "reducers/products";
import { fetchProducts } from 'reducers/products'

export const Input = (e) => {
  const dispatch = useDispatch()

  const handleOnSubmit = () => {
    dispatch(productsList.actions.fetchProducts())
  }

  // const handleOnSubmit = (event) => {
  //   return (
  //     event.preventDefault()
  //     dispatch(products.productsList.actions.fetchProducts())
  //   )
  // }

  // const onDetected = (code) => {
  //   console.log(`Code: ${code}`);
  //   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
  //     .then((data) => data.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // };

  return (
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        {/* <input type="text" value={(e.target.value)}></input> */}
        <input type="text"></input>
        {/* <button type="button" onClick={() => dispatch(fetchProducts(7310865071804))}>Submit the Milk product</button> */}
        {/* <button type="button" onClick={() => dispatch(fetchProducts(7310130003530))}>Submit the Milk product</button> */}
        <button type="button" onClick={() => dispatch(fetchProducts(7310865071804))}>Submit the Milk product</button>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
        Pasta: 7310130003530 , Kikärtor: 7340011487906
      </p>
      {/* <BarcodeScanner /> */}
    </div>
  );
};
