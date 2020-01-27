# Project Nutrition

This week's project at the Technigo boot camp was to build an app which scans barcodes on food packages to retrieve the product name and nutritional information. The app was built to practice using Redux as a global state store. We had a component which uses [quagga] to access our webcam to use it to scan products.

Tech:
<br>React</br>
Redux

I created reducers for the UI and for the products. I used components for scanning the barcode, for displaying information about the scanned product and for handling loading. When the BarcodeScanner successfully scans a barcode, it invokes a callback function with the barcode code. The barcode is passed to the [Open world facts api](https://world.openfoodfacts.org/) to try to find information about that product.
I used a thunk to wrap the API call and an error message for when the product isn't found.

Deployed project: https://michel-nutrition.netlify.com/
