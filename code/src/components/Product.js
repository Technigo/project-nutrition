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
  const scan = useSelector(state => state.barcodes.product);

  if (!scan) return null;

  console.log('product', scan);

  const categories =
    scan.product &&
    scan.product.categories_tags.map(cat => cat.replace('en', ''));

  return (
    <>
      {scan.product && (
        <Wrapper>
          <Container>
            <Brand>
              <Title>Brand</Title>
              {scan.product && scan.product.brands}
            </Brand>

            <ProductImage>
              <Title>Product image</Title>
              <Image
                src={scan.product && scan.product.image_front_small_url}
              ></Image>
            </ProductImage>

            <Packaging>
              <Title>Packaging</Title>
              {scan.product && scan.product.packaging}
            </Packaging>
            <Nutrient>
              <Title>Nutrient</Title>
              <ul>
                {categories.map((nutrient, index) => (
                  <li key={index}>{nutrient}</li>
                ))}
              </ul>
            </Nutrient>
          </Container>
        </Wrapper>
      )}
      {scan.status === 0 && <h1>{scan.status_verbose}</h1>}
    </>
  );
};

/*

const nutrients =
    product.product &&
    product.product.nutrient_levels.map(nut => nut.replace('en', ''));
    
<Nutrient>
              <Title>Nutrient</Title>
              <ul>
                {nutrients.map((nutr, index) => (
                  <li key={index}>{nutr}</li>
                ))}
              </ul>
            </Nutrient>
*/
