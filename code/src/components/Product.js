import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 10px 20px 10px;
  background-image: url(${props => props.src});
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`;

const ScanItem = styled.div`
  color: black;
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
  box-shadow: 4px 4px 10px grey;
  border-radius: 16px;
  margin-top: 20px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Title = styled.p`
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background: white;
  width: 85%;
  background: white;
  margin: 0px 20px 5px 20px;
  padding: 20px;
  border-bottom: 1px solid gray;
  p {
    font-weight: normal;
    margin: 0;
  }
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
  background-size: cover;
  width: 100%;
`;

const Packaging = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 85%;
  background: white;
  margin: 0px 20px 5px 20px;
  padding: 20px;
  border-bottom: 1px solid gray;

  p {
    font-weight: normal;
    margin: 0;
  }
`;

const Categories = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 85%;
  background: white;
  margin: 0px 20px 5px 20px;
  padding: 20px;

  li {
    font-weight: normal;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  border: none;
  color: blue;
  font-size: 12px;
  font-weight: bold;
  text-shadow: 2px 2px 3px gray;
`;

export const Product = () => {
  const scan = useSelector(state => state.barcodes.product);

  if (!scan) return null;

  console.log('product', scan);

  const categories =
    scan.product &&
    scan.product.categories_tags.map(cat =>
      cat.replace('en', '').replace(':', '')
    );

  return (
    <>
      {scan.status === 0 && <p>{scan.status_verbose}</p>}

      {scan.product && (
        <Wrapper>
          <Container>
            <ScanItem>
              <Title>
                Brand and product <p>{scan.product && scan.product.brands}</p>
                <p>{scan.product && scan.product.ingredients_text}</p>
              </Title>

              <Packaging>
                Packaging<p>{scan.product && scan.product.packaging}</p>
              </Packaging>
              <Categories>
                Categories{' '}
                <ul>
                  {categories.map((nutrient, index) => (
                    <li key={index}>{nutrient}</li>
                  ))}
                </ul>
              </Categories>
              <Image src={scan.product && scan.product.image_front_url}></Image>
              <ActionButtonsContainer>
                <ActionButton type="button">Add to favourites</ActionButton>
                <ActionButton type="button">Share product</ActionButton>
              </ActionButtonsContainer>
            </ScanItem>
          </Container>
        </Wrapper>
      )}
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



            <ScanItem>
              <Title>Product image</Title>
              <Image
                src={scan.product && scan.product.image_front_small_url}
              ></Image>
            </ScanItem>

            <ScanItem>
              <Title>Packaging</Title>
              {scan.product && scan.product.packaging}
            </ScanItem>
            <ScanItem>
              <Title>
                Nutrient{' '}
                <ul>
                  {categories.map((nutrient, index) => (
                    <li key={index}>{nutrient}</li>
                  ))}
                </ul>
              </Title>
              <ul>
                {categories.map((nutrient, index) => (
                  <li key={index}>{nutrient}</li>
                ))}
              </ul>
            </ScanItem>
*/
