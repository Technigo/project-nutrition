import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components/macro'
import { ProductCard } from "components/ProductCard"
import { LoadingIndicator } from "./LoadingIndicator";

const NotFound = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`

const NotFoundImg = styled.img`
  width: 50%;
  border-radius: 6px;
`

const Message = styled.p`
  padding: 0px 32px;
  text-align: justify;
`

export const Product = () => {
  const scan = useSelector(state => state.products.product);
  const showScanner = useSelector(state => state.ui.showScanner);
  const isLoading = useSelector(state => state.ui.isLoading);

  if (!scan) return null;

  console.log(scan)

  return (

    <>
      {!isLoading && !showScanner && (scan.product && scan.status) === 1 && scan.code !== null && (
        <ProductCard product={scan.product} code={scan.code} />
      )}
      {!isLoading && !showScanner && (scan.status === 0 || scan.code === "" || scan.code === null) && (
        <NotFound>
          <h1>Product not found</h1>
          <NotFoundImg src="./assets/not_found.jpg" alt="Product not found" />
          <Message>
            Oh no! Sometimes this happens because our scanner didn't pick up the correct code or it might
            be that the product isn't at Open Food Facts database yet.
          </Message>
          <Message>
            Either way, give it another try! You can insert the code manually or you can scan another product.
          </Message>
        </NotFound>
      )}
      {isLoading && <LoadingIndicator />}
    </>
  );
};
