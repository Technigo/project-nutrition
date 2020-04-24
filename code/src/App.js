import React from "react";

import { ScanBarcode } from './components/ScanBarcode'

const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
    });
};

export const App = () => {
  return (
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>
      <ScanBarcode />
    </div>
  );
};
