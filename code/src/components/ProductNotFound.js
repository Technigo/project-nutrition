import React from "react";
import Lottie from "lottie-react-web";
import animation from "../animations/error.json";
import styled from "styled-components";

export const ProductNotFound = () => {
  return (
    <Wrapper>
      <Lottie
        options={{
          animationData: animation,
          loop: false,
        }}
        width="100px"
        height="100px"
      />
      <Title>Oh no!</Title>
      <SubTitle>
        The product you scanned doesn't seem to be avilable at{" "}
        <A href="https://world.openfoodfacts.org/">Open Food Facts</A>. Why
        don't you head over there and add it to their API? 👩🏼‍💻
      </SubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h2`
  margin: 25px auto;
  font-size: 32px;
  text-align: center;
`;

const A = styled.a`
  color: #000;
`;

const SubTitle = styled.h3`
  padding: 25px 45px 0;
  max-width: 450px;
  margin: 0;
  font-size: 24px;
  text-align: justify;
  @media (max-width: 668px) {
    padding: 15px 25px 0;
  }
`;
