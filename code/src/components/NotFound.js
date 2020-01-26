import React from "react";

import styled from "styled-components";

const Main = styled.div`
  padding-top: 1rem;
  margin: 0 auto;
  text-align: center;
  background: #eee;
`;

const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (min-width: 700px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  width: 80%;
  border-radius: 20px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const NotFound = () => {
  return (
    <Main>
      <Header>Product not found!</Header>
      <p>
        Want to scan another product! Go down to the barcode scanner{" "}
        <span have role="img" aria-labelledby="go to scanner">
          👇{" "}
        </span>
      </p>
      <Image src={require("../img/notfound.jpg")} />
    </Main>
  );
};
