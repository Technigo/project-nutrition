import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 3rem;
`;

export const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.ui.isLoading);

  return (
    <>
      {isLoading && (
        <Wrapper>
          <Loader
            type="Oval"
            color="#f8c3af"
            height={100}
            width={100}
            timeout={3000}
          />
        </Wrapper>
      )}
    </>
  );
};
