import React, { useState } from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux';
import { productStore } from 'reducers/productStore';
import { BarcodeScanner } from 'components/BarcodeScanner';
import { ScanBarcode } from './components/Home';
import { Result } from 'components/Result';

const reducer = combineReducers({
	productStore: productStore.reducer
});

const store = configureStore({ reducer });
export const App = () => {
	const [ products, setProducts ] = useState([]);

	return (
		<Provider store={store}>
			<div>
				<label> </label>
				<p>
					{' '}
					Use the field above to test barcodes manually and keep an eye on your console in the browser. i.e.
					Type 7311070347272 - Pågen Gifflar. Yum
				</p>
				<ScanBarcode />
			</div>
			<Result />
		</Provider>
	);
};

//Test codes here: <input type="text" onChange={(e) => onDetected(e.target.value)} />
