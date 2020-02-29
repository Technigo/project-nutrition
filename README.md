A product scanner 

This project was all about building an app which scans barcodes on food packages to retrieve the product name and nutritional information. I used [Open world facts api](https://world.openfoodfacts.org/).
I could choose what I wanted to do with the information, and how I wanted to present it. A lot of Swedish products where missing so I added for example ICA's krossade tomater but I found Läkerol Apple Elderflower.

The products that I found in the database got a massive response back with all sorts of information, including nutritional information, images, product name, tags, and other descriptions. 

I used a built component which uses [quagga](https://github.com/serratus/quaggaJS) to access my webcam, to use it to scan products and my app should use Redux as a global state store, but beyond that, it's was up to me to decide what other libraries and tools I wanted to encorporate into my app. 

## What I learned 🧠

* How to make API calls around Redux using thunks
* How to structure your redux store to suit your data

## Requirements 🧪

* Use redux, preferably using a thunk to wrap your api call (but you don't have to if you don't want to).
* Focus on making the UX of your app good. Handle when a product isn't found. Try to display relevant information about products and not overload your page with data.
* Your page should be responsive.

You can see it eployed here: https://product-scanner-petrabrinck.netlify.com/
