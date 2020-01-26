import React from "react";
import styled from "styled-components";

export const Card = ({
  title,
  secondaryText,
  numberOfIng,
  thumbnailUrl,
  coverImage,
  className,
  children
}) => (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
            {numberOfIng && <NumberOfIng>{numberOfIng}</NumberOfIng>}
          </div>
        </TitleBar>
        {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>
  );

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  background-color: white;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b6b6b;
`;

const NumberOfIng = styled.p`
  margin: 0;
  font-size: 14px;
  color: darkorange;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  background-image: url(${(props) => props.url});
  background-size: scale-down;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  max-height:300px;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const ChildrenContent = styled.div`
  background: #f1f1f1;
  padding: 10px;
`;
