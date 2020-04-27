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
			let notInside = true;
			productList.map((item) => {
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
		toggleCamera: (state, action) => {
			const status = state.camera;
			if (status) {
				state.camera = false;
			} else {
				state.camera = true;
			}
		},
		startCamera: (state, action) => {
			state.camera = true;
		},
		stopCamera: (state, action) => {
			state.camera = false;
		}
	}
});

export const fetchData = (code) => {
	const foodUrl = `https://world.openfoodfacts.org/api/v0/product/${code}.json`;
	return (dispatch) => {
		fetch(foodUrl)
			.then((data) => data.json())
			.then((json) => {
				// console.log(json.status);
				// products.push(json);
				// console.log(products);
				if (json.status === 1) {
					let products = [];
					products.push(json);
					// setProducts([json])
					// console.log('This is the useState:', products);
					//setShowScanner(false);
					dispatch(productStore.actions.stopCamera());
					dispatch(productStore.actions.addProduct(products.find((item) => item.status === 1)));
					//	dispatch(productStore.actions.addError({ code: code, message: 'product found' }));
					products = [];
				} else {
					dispatch(productStore.actions.addError('product not found'));
				}
			})
			.catch(function(error) {
				console.log(error);
				dispatch(productStore.actions.addError(error));
			});
	};
};
