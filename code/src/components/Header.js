import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: powderblue;
  width: 100%;
  height: 80px;
  margin: 0;
  position: fixed;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`

const Icon = styled.button`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border: none;
  margin-right: 10px;
  `;

const Emoji = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  height: auto;
  color: transparent;
  text-shadow: 0 0 0 white;
`;

const Label = styled.p`
  font-size: 12px;
  color: white;
`;

const Title = styled.h1`
color: white;
`;


export const Header = () => {


    return (
       
        <Container>
             {/* <!--Creating a hamburger menu with lines, made by div's--> */}
            <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
                <BtnContainer>
                    <Title>carbs</Title>
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