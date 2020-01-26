import styled from "styled-components/macro";
import lamb from "./lamb.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${lamb});
  background-size: cover;
  height: 100vh;
`;

export const ColorOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.45;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  text-align: center;
  padding: 10px;
`;

export const Button = styled.button`
  font-size: 0.8rem;
  display: inline-block;
  border: none;
  border-radius: 2px;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    background: #0053ba;
  }
`;

export const CountingSheep = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
`;

export const Scan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > video {
    border-radius: 20px;
  }
  & > canvas {
    width: 0;
  }
`;
