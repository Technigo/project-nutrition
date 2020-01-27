# Project Nutrition built with React Hooks

In this project I used React with Redux building a barcode scan app that gives you information about allergenic traces in food.

I fetched the product data from the [Open world facts api](https://world.openfoodfacts.org/), and used a thunk to wrap my api call.

In my barcode scan app, you can scan the barcode on any food package, if the product is found you will get a information card with

- The name of the brand and product
- How many allergenic products their is and what products.
- Image of the product

If the product is not found it returns a card with errormessage and a link to Open Food Facts, so the user can add the product if needed.

I also use [quagga](https://github.com/serratus/quaggaJS) in order to access the webcam to use it to scan the products.

Tools and techniques
This project is build with functional React, and it's devided into multiple components. If I had more time I would have add a alert message if the product is not found and react router to divide the product info into a new page.

My deployed site: barcode-scanner.netlify.com
