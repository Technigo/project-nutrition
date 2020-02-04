## 1. What is this?

In this project I've practiced Redux once more (to structure the store to suit the data to the project) and the usage of thunks to make API calls.

## 2. What did I do?

For this project, I've used [quagga](https://github.com/serratus/quaggaJS) to scan barcodes and then search for those at [Open world facts API](https://world.openfoodfacts.org/) to retrieve nutritional data for those products.
Two reducers where implemented, one for the ui and management of loading states and another one fetch the product by using a thunk to call the API and to manage its response.
I've also added the possibility to manually insert a code to search for a product.
For the design, I've tried to follow some guidelines of [material components](https://material.io/components/).

## 3. Where can you see it in action?

You can see the final project [here](https://elastic-edison-6b2a4b.netlify.com/).
