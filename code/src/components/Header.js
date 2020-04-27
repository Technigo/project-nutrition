import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Title = styled.h1`color: #bf3922;`;

export const Header = () => {
	const message = useSelector((state) => state.productStore.errorMessage);
	const cameraOn = useSelector((state) => state.productStore.camera);
	//show error message only when scanning
	return (
		<div>
			<Title>Health App</Title>
			{cameraOn ? message : ''}
		</div>
	);
};
