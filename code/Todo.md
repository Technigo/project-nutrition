

Nutrition Barcode, Pair project

Requirements 🧪
* Use redux, preferably using a thunk to wrap your api call (but you don't have to if you don't want to).
* Focus on making the UX of your app good. Handle when a product isn't found. Try to display relevant information about products and not overload your page with data.
* Your page should be responsive.

// PLAN

1. Base info to use:
Name: {item.product.product_name}
Brand: {item.product.brands}
Some 'easy' conditional rendering?

2. Handle when a product isn't found:   // if (!item) return null

3. Set Loading - UI - loading spinner react?
"..provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view."
https://www.npmjs.com/package/react-loader-spinner

CAN'T SEE THE LOADING HAPPENING - WE'LL COME BACK TO IT!

4. Design
5. Styled components
6. Responsive
7. Display a message when a field empty
-------

// If we have time left: 

- Add more info
Needs .map and conditional rendering oc components/data?
Category: 	product.categories_tags
Ingredients: 	product.ingredients_hierarchy
Img? product.image_front_thumb_url

- Camera - scan
-------
Barcodes:
Pågen Gifflar: 7311070347272
Snabbmakaroner: 7310130003530  
Kikärtor: 7340011487906 
Mjölk: 7310865071804 
Husman: 7300400118408
Ginger Chew: 7350031936216

