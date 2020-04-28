import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { productsList } from "reducers/products";
import { fetchProducts } from "reducers/products";
import styled from "styled-components/macro";

export const Input = () => {
  const [barcode, setBarcode] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // dispatch(productsList.actions.fetchProducts(barcode));
    dispatch(fetchProducts(barcode));

    setBarcode("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <InputField
          placeholder="What is your barcode?"
          type="text"
          onChange={(event) => setBarcode(event.target.value)}
          value={barcode}
        ></InputField>
        <BarcodeButton disabled={!barcode} type="submit" value="Add barcode">
          Add barcode
        </BarcodeButton>
      </Form>


      {/* <BarcodeScanner /> */}
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  border-radius: 6px;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  ::placeholder {
    color: #b2b2b2;
  }
`;

const BarcodeButton = styled.button`
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  margin: 5px 0 20px 0;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  background: #ce784d;
  color: whitesmoke;
  &:hover {
    background: #193546;
  }
`;
