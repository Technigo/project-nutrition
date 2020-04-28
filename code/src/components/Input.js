import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsList } from "reducers/products";
import { fetchProducts } from "reducers/products";

export const Input = () => {
  const [barcode, setBarcode] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = event => {
    event.preventDefault();

    // dispatch(productsList.actions.fetchProducts(barcode));
    dispatch(fetchProducts(barcode));

    setBarcode("");
  };

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
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="What is your barcode?"
          type="text"
          onChange={(event) => setBarcode(event.target.value)}
          value={barcode}
        ></input>
        <button disabled={!barcode} type="submit" value="Add barcode">
          Add barcode
        </button>
      </form>

      {/* <form>
        {" "}
        Test codes here:{" "}
        <input type="text" value={(e.target.value)}></input>
        <input
          type="text"
          value={barcode}
          onChange={(event) => setBarcode(event.target.value)}
        ></input>
        <button type="button" onClick={() => dispatch(fetchProducts(7310865071804))}>Submit the Milk product</button>
        <button type="button" onClick={() => dispatch(fetchProducts(7310130003530))}>Submit the Milk product</button>
        <button type="button" onClick={() => handleOnSubmit()}>
          Submit the product
        </button>
      </form> */}
      <p>
        {" "}
        Type 7311070347272 - Pågen Gifflar. Yum
        Pasta: 7310130003530 , Kikärtor: 7340011487906, Mjölk: 7310865071804, 
        Husman: 7300400118408, Ginger Chew: 7350031936216 
      </p>
      {/* <BarcodeScanner /> */}
    </div>
  );
};
