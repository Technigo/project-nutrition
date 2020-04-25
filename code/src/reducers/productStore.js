import { createSlice } from '@reduxjs/toolkit';
// Inital state
const myInitialState = {
	scannedProducts: []
};

export const productStore = createSlice({
	name: 'productStore',
	initialState: myInitialState,
	reducers: {
		// Possible actione
		// New Task
		addProduct: (state, action) => {
			console.log('this action', action.payload);
			const productList = state.scannedProducts;
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

			// 	if (item.code === action.payload.code) {
			// 		console.log('This code already exists');
			// 	} else {
			// 		state.scannedProducts.push(action.payload);
			// 		console.log('array', state.scannedProducts);
			// 	}
			// });

			// add new product to list
		}
	}
});
