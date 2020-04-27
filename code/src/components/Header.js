import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Title = styled.h1`color: #bf3922;`;
export const Header = () => {
	const message = useSelector((state) => state.productStore.errorMessage);
	const cameraOn = useSelector((state) => state.productStore.camera);

	return (
		<div>
			<Title>Health App</Title>
			{cameraOn ? message : ''}
		</div>
	);
};

// function isCherries(fruit) {
//   return fruit.name === 'cherries';
// }

// console.log(inventory.find(isCherries));
// // { name: 'cherries', quantity: 5 }
