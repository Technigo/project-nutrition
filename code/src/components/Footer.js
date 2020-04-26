import React from 'react';
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterWrapper> Kajsa Bootin och Christina Persson 2020</FooterWrapper>
  )
}

const FooterWrapper = styled.header`
display: flex;
align-items: center;
flex-direction: row;
border-top: 4px dashed #8db55f;
background: #fafff1;
`