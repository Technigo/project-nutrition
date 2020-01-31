# Project Nutrition 🥕

I build an app which scans barcodes on food packages to retrieve the product name and informations about it from [Open world facts api](https://world.openfoodfacts.org/). I deciced to check if the product is local. 

I've built this app using Redux as a global state and the component using [quagga](https://github.com/serratus/quaggaJS) - it allowed me to access my webcam and scan products. 

### Fetching product data

I'm using the [Open world facts api](https://world.openfoodfacts.org/) to fetch information about product. It gives me API with one endpoint. If the product is found in the database, I'm getting a response with all sorts of information, including nutritional information, images, product name, tags, and other descriptions. For now, I chose to show only one of them. 

## Design

![app](https://i.pinimg.com/564x/d1/f7/dc/d1f7dc13121fabb034a68014b748f872.jpg)
