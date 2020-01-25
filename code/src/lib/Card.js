import React from 'react'
import styled from 'styled-components/macro'

export const Card = ({ title, secondaryText, thumbNailUrl, coverImage, className, children }) => {



  return (
    <Container className={className}>
      <TitleBar>
        {thumbNailUrl && <Thumbnail url={thumbNailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      <Content>
        {children && <ChildrenContent>{children}</ChildrenContent>}
        {coverImage && <CoverImage src={coverImage} />}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin-bottom: 20px; 
  }
`
const CoverImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 6px;
   @media (max-width: 449px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 450px) and (max-width: 750px) {
    width: 200px;
    height: 200;
  }
`
const ChildrenContent = styled.div`
padding: 10px;
`

const TitleBar = styled.div`
  display: flex;
  border-radius: 6px 6px 0px 0px;
  align-items: center;
  padding: 20px;
  background: #f1f1f1;

`
const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px; 
`
const SecondaryText = styled.h2`
  margin: 0;
  color: #6b6b6b;
  `

const Thumbnail = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px; 
`
