import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 10px 0 10px;
  background-image: url(${props => props.src});
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Brand = styled.p`
  color: black;
  width: 30%;
  height: 300px;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

const Title = styled.p`
  color: black;
`;

const ProductImage = styled.p`
  width: 30%;
  height: 300px;
  border: 1px solid pink;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 350px;
  }
`;

const Image = styled.img`
  border: none;
`;

const Packaging = styled.p`
  color: black;
  border: 1px solid pink;
  width: 30%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

const Nutrient = styled.p`
  color: black;
  border: 1px solid pink;
  width: 30%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 350px;
  }
`;

export const Product = () => {
  const product = useSelector(state => state.barcodes.product);

  if (!product) return null;

  console.log('product', product);
  return (
    <>
      <Wrapper>
        <Container>
          <Brand>
            <Title>Brand</Title>
            {product.product && product.product.brands}
          </Brand>

          <ProductImage>
            <Title>Product image</Title>
            <Image
              src={product.product && product.product.image_front_small_url}
            ></Image>
          </ProductImage>

          <Packaging>
            <Title>Packaging</Title>
            {product.product && product.product.packaging}
          </Packaging>
          <Nutrient>
            <Title>Nutrient</Title>
            {product.product &&
              product.product.ingredients_text_with_allergens_en}
          </Nutrient>
        </Container>
      </Wrapper>
    </>
  );
};
