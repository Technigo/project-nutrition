import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productStore } from 'reducers/productStore';
import { ScanBarcode } from './components/ScanBarcode';
import { Result } from 'components/Result';
import { Header } from './components/Header';
import styled from 'styled-components';

const ParentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const reducer = combineReducers({
	productStore: productStore.reducer
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<ParentContainer>
			<Provider store={store}>
				<Header />
				<ScanBarcode />
				<Result />
			</Provider>
		</ParentContainer>
	);
};
