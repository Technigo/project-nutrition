import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background: #fff;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
  @media (min-width: 900px) {
    border-top: 6rem white solid;
    border-left: 8rem white solid;
    border-right: 8rem white solid;
    border-bottom: 2rem white solid;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 20px;
  margin-top: 2rem;
`;

export const Card = ({
  title,
  secondaryText,
  image,
  className,
  children,
  keywords
}) => (
  <Container className={className}>
    {image && <CoverImage src={image} />}
    <Content>
      <TitleBar>
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>
  </Container>
);
