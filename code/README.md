# Barcode Scanner project

This web app has been generated using `create-react-app`-boilerplate. The project is a barcode scanner, which scans and fetch an API through which we can get information about the scanned product. The web app renders information wether the product contains palm oil or not, and it also renders a message in case the scanning did not work or if the product is missing in the API.

The project has been built with react redux, state-hooks and redux-hooks such as useDispatch and thunk.

## The process

First I set upp the store and reducers for the web app, after that I mounted the barcodescanner and fetched the API to see what information I could get from it. Based on this I decided what the focus of the app would be an could start the planning of the project. Next step was to start mount data from the API, then I focused on bulidng the function and layput of the menu at the top left-corner. NExt step was to focus on conditional rednerings and adding the function behind the cancel-button that is showing when the scanner is active. 


If I had more time I would have used route to make several pages for the app. I also would have adjusted what is visible when a barcode has been scanned and a product is showing. For example I would not want the barcode animation to show when a product has been found. 


## Deployed site

https://palmoil-nothanks.netlify.com/
