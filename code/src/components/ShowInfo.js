import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { NutritionContent } from 'components/NutrionContent';

const StyledShowInfo = styled.div`
  /* border: 1px solid red; */
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  img {
    border-radius: 6px;
  }
`;

const ProductSummary = styled.div`
  padding: 1rem;
`;

export const ShowInfo = () => {
  const data = useSelector(state => state.food.product);
  if (data) {
    console.log(data);
    console.log(data.id);
    console.log(data.product_name);
    console.log(data.image_small_url);
    console.log(data.brands);
  }

  return (
    <StyledShowInfo>
      <ProductWrapper>
        <ProductSummary>
          <h3>Product summary</h3>
          {data && data.brands && <p>{data.brands}</p>}
          {data && data.product_name && <p>{data.product_name}</p>}
        </ProductSummary>
        {/* <ProductImage>
          {data && data.image_small_url && (
            <img src={data.image_small_url} alt="small" />
          )}
        </ProductImage> */}
      </ProductWrapper>
    </StyledShowInfo>
  );
};
