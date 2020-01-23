import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { NutritionContent } from 'components/NutrionContent';

const StyledShowInfo = styled.div`
  padding: 1rem 5rem;
  /* border: 1px solid red; */
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ItemTitle = styled.span`
  text-align: left;
`;
const ItemDetails = styled.span`
  text-align: right;
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
      <h3>Product summary</h3>
      <ul>
        <Item>
          <ItemTitle>Bar code</ItemTitle>
          {data && data.id ? (
            <ItemDetails>{data.id}</ItemDetails>
          ) : (
            <ItemDetails>-</ItemDetails>
          )}
        </Item>
        <Item>
          <ItemTitle>Brand</ItemTitle>
          {data && data.brands ? (
            <ItemDetails>{data.brands}</ItemDetails>
          ) : (
            <ItemDetails>-</ItemDetails>
          )}
        </Item>
        <Item>
          <ItemTitle>Product</ItemTitle>
          {data && data.product_name ? (
            <ItemDetails>{data.product_name}</ItemDetails>
          ) : (
            <ItemDetails>-</ItemDetails>
          )}
        </Item>
      </ul>
    </StyledShowInfo>
  );
};
