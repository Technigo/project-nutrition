import React from 'react';
import { useSelector } from 'react-redux';

export const Result = () => {
	const products = useSelector((state) => state.productStore.scannedProducts);
	return (
		<div>
			{products.map((item) => (
				<p>{`name:${item.product.product_name} & allergens:${item.product.allergens}`} </p>
			))}
		</div>
	);
};
