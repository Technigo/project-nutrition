import React from "react";
import styled, { keyframes } from 'styled-components'

export const LoaderSpinner = () => {
  return (
    <LoaderContainer>
      <Loading>
        <EmojiLoad>🥜</EmojiLoad>
        <EmojiLoad>🥚</EmojiLoad>
        <EmojiLoad>🥛</EmojiLoad>
      </Loading>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
background-color:transparent;
display: flex;
`

const Loading = styled.div`
margin-top: 100px;
`

const bounce = keyframes` 
  0%,
  50%,
  100% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}

25% {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  -o-transform: translateY(-20px);
  transform: translateY(-20px);
  }
`

const EmojiLoad = styled.span`
display: inline-block;
font-size: 2rem;
width: 30px;
height: 20px;
margin: 0 0.5rem;

&:nth-child(1) {
  animation: ${bounce} 1s ease-in-out infinite;
}
&:nth-child(2) {
  animation: ${bounce} 1s ease-in-out 0.2s infinite;
}
&:nth-child(3) {
  animation: ${bounce} 1s ease-in-out 0.4s infinite;
}
`



