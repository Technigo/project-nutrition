import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledShowInfo = styled.div`
  padding: 3rem 2rem;
`;

const List = styled.ul`
  border: 1px solid rgba(14, 30, 37, 0.13);
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  padding: 1rem;
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

const Error = styled.h3`
  text-align: center;
`;

export const ShowInfo = () => {
  const data = useSelector(state => state.food.product);
  const showScanner = useSelector(state => state.scanner.showScanner);
  const productFound = useSelector(state => state.food);

  return (
    <StyledShowInfo>
      {!showScanner && productFound.status && data && (
        <>
          {/* <h3>Product summary</h3> */}
          <List>
            <Item>
              <ItemTitle>Barcode</ItemTitle>
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
          </List>
        </>
      )}
      {!showScanner && !productFound.status && productFound.length !== 0 && (
        <Error>No product found</Error>
      )}
    </StyledShowInfo>
  );
};
