import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.article`
	width: 300px;
	min-height: 300px;
	background-color: #777;
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

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Thumbnail = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

export const Result = () => {
	const products = useSelector((state) => state.productStore.scannedProducts);
	const test = useSelector((state) => state.productStore.camera);

	return (
		<Container>
			{console.log('camera is ', test)}
			<SubTitle>Your Products</SubTitle>
			{products.map((item) => (
				<Wrapper>
					<Text>{`Name: ${item.product.product_name} & Allergens: ${item.product.allergens}`} </Text>
					<Thumbnail src={item.product.image_front_url} />
				</Wrapper>
			))}
		</Container>
	);
};
