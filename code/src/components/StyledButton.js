import React from 'react'
import styled from 'styled-components/macro'

export const StyledButton = ({ onClick, buttonInfo }) => {
  return (
    <Button type="button" onClick={onClick}>
      {buttonInfo}
    </Button>
  )
}

const Button = styled.button`
  margin: auto;
  margin-top: 50px;
  padding: 1.5rem 2rem;
  border-radius: 18px;
  box-shadow: 10px 5px #203240;
  font-family: "Cabin", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: #91ccec;
  outline: none;
  border: none;
  max-width: 200px;
`;