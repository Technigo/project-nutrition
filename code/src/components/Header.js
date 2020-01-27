import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color:  #adebeb;
  border-bottom: 2px solid white;
  width: 100%;
  height: 80px;
  margin: 0;
  position: fixed;
  top: 0px;

  
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
  @media (min-width: 650px){
  margin-right: 50px;
  width: 650px;
  }
  @media (min-width: 900px){
    margin-right: 200px;
    width: 900px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
 
`

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  @media (min-width: 900px){
    margin-left: 30px;
  }
  `;

const Emoji = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  height: auto;
  color: transparent;
  text-shadow: 0 0 0 white;
  @media (min-width: 650px){
    font-size: 25px;
  }
`;

const Label = styled.p`
  font-size: 12px;
  color: white;
`;

const Title = styled.h1`
color: white;

@media (min-width: 650px){
  font-size: 3em;
}

`;


export const Header = () => {


  return (
       
    <Container>
      {/* <!--Creating a hamburger menu with lines, made by div's styled in main css-file--> */}
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <BtnContainer>
        <Title>carbs scan</Title>
        <IconContainer>
          <Icon>
            <Emoji>
              <span role="img" aria-label="heart">
              ❤
              </span>
            </Emoji>
          </Icon>
          <Icon>
            <Emoji>
                <span role="img" aria-label="sun">
                🔍
                </span>
            </Emoji>
          </Icon>
        </IconContainer>
      </BtnContainer>
    </Container>

  
)
}