import { createSlice } from '@reduxjs/toolkit';

const myInitialState = {
	errorMessage: '',
	camera: false,
	scannedProducts: []
};

export const productStore = createSlice({
	name: 'productStore',
	initialState: myInitialState,
	reducers: {
		addProduct: (state, action) => {
			console.log('this action', action.payload);
			const productList = state.scannedProducts;
			state.errorMessage = '';
			//checking if scanned product is in our array
			let notInside = true;
			productList.forEach((item) => {
				if (item.code === action.payload.code) {
					notInside = false;
				}
			});
			if (notInside) {
				state.scannedProducts.push(action.payload);
				console.log('array:', state.scannedProducts);
			}
		},
		addError: (state, action) => {
			state.errorMessage = action.payload;
		},
		startCamera: (state, action) => {
			state.camera = true;
		},
		stopCamera: (state, action) => {
			state.camera = false;
		}
	}
});
// Thunk for fetching product data
export const fetchData = (code) => {
	const foodUrl = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
	return (dispatch) => {
		fetch(foodUrl)
			.then((data) => data.json())
			.then((json) => {
				// successful fetch
				if (json.status === 1) {
					let products = [];
					products.push(json);
					// close camera
					dispatch(productStore.actions.stopCamera());
					// add product to store
					dispatch(productStore.actions.addProduct(products.find((item) => item.status === 1)));
					products = [];
				} else {
					// adding error message
					dispatch(productStore.actions.addError('product not found'));
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	};
};
