import React from 'react'
import styled from 'styled-components/macro'

export const Card = ({ title, secondaryText, thumbNailUrl, coverImage, className, children }) => {



  return (
    <Container className={className}>
      <Content>
        <TitleBar>
          {thumbNailUrl && <Thumbnail url={thumbNailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
          {coverImage && <CoverImage src={coverImage} />}

        </TitleBar>

        {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>

  )
}

const Container = styled.div`
  border-radius: 6px;
  background-color: #fff;
  background-color: var(--mdc-theme-surface, #fff);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin-bottom: 20px; 
`
const CoverImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 6px 6px 0px 0px;
`
const ChildrenContent = styled.div`
background: #f1f1f1;
padding: 10px;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`
const Content = styled.div`
  padding: 20px;
  margin: 15px;  
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px; 
`
const SecondaryText = styled.p`
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
