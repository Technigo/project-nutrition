import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Errors } from 'components/Errors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px 20px 10px;
  background-image: url(${props => props.src});
  width: 60%;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
  }
`;

const ScanItem = styled.div`
  color: black;
  width: 80%;
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

const Title = styled.div`
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
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  p.brand {
    font-weight: normal;
    margin: 0;
    border-top: 1px solid black;
  }
  li {
    font-weight: normal;
    margin: 0;
    list-style-type: none;
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

  li {
    font-weight: normal;
    margin: 0;
    list-style-type: none;
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
    list-style-type: none;
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

  const allergies =
    scan.product &&
    scan.product.traces_hierarchy.map(cat =>
      cat.replace('en', '').replace(':', '')
    );

  return (
    <>
      <Errors />
      {scan.product && (
        <Wrapper>
          <Container>
            <ScanItem>
              <Title>
                Brand and product
                <ul className="Brand">
                  <li>{scan.product && scan.product.brands}</li>
                  <li>{scan.product && scan.product.product_name_en}</li>
                </ul>
              </Title>
              <Categories>
                This product contains {allergies.length} traces of allergenic
                food
                <ul>
                  {allergies.map((allergy, index) => (
                    <li key={index}>{allergy}</li>
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
