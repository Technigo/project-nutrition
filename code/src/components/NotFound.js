import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const Main = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 3rem;
  background: #eee;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 700px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 20px;
  margin-bottom: 2rem;
`;

export const NotFound = () => {
  const scan = useSelector(state => state.products.product);

  return (
    <Main>
      <Header>Product not found!</Header>
      <Image src={require("../img/notfound.jpg")} />
    </Main>
  );
};
