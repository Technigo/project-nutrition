import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.article`
	width: 300px;
	min-height: 300px;
	background-color: #555;
	border-radius: 10px;
	padding: 10px;
	margin-top: 16px;
`;

const SubTitle = styled.h2`
	color: darkorange;
	font-size: 32px;
`;
const Text = styled.p`
	color: black;
	font-size: 24px;
	text-decoration: underline;
`;

export const Result = () => {
	const products = useSelector((state) => state.productStore.scannedProducts);
	return (
		<Container>
			<SubTitle>Your Products</SubTitle>
			{products.map((item) => (
				<Text>{`Name: ${item.product.product_name} & Allergens: ${item.product.allergens}`} </Text>
			))}
		</Container>
	);
};
