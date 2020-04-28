import React from "react";
import { BarcodeScanner } from "components/BarcodeScanner";

// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };



export const App = () => {
  return (
    <div>
      {/* <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label> */}
        {/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */}
    </div>
  );
};
