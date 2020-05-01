import React from 'react'
import styled from 'styled-components/macro'


export const Footer = () => {
  return (
    <FooterSection>
      <p>Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has.</p>
      <p>—Margaret Mead</p>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  background-color: #F2F2F2;
  display: block;
  text-align: center;
  font-family: 'Monserat';
  font-size: 18px;
  font-style: italic;
  padding: 10px 18px;
  margin-top: 40px;
  border-top: 1px solid white;
  height: auto;
`
