import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const ContentWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0 20px;
`
const Card = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  border-radius: 6px;
  background: #fff;
  width: 50%;
  height: 100%;
  padding: 20px;
  font-size: 18px;
  @media (max-width: 449px) {
    width: 95%;
    font-size: 14px;
  }
  @media (min-width: 450px) and (max-width: 800px) {
    width: 70%;
    font-size: 14px;
  }
`
const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  margin-right: 20px;
`
const InnerWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const TextHeading = styled.p`
  font-weight: bold;
  margin: 0;
`
const ProductText = styled.p`
  margin: 0 0 10px 0;
`

export const ProductGeneral = () => {

  const product = useSelector(state => state.products.product)
  const imgUrl = product.product.image_front_thumb_url

  return (
    <ContentWrapper>
      <Card>
        <Thumbnail imgUrl={imgUrl} alt='product' />
        <InnerWrapper>
          <TextHeading>Product:</TextHeading>
          <ProductText>{product.product.product_name}</ProductText>
          <TextHeading>Brand:</TextHeading>
          <ProductText>{product.product.brands}</ProductText>
        </InnerWrapper>
      </Card>
    </ContentWrapper>
  )
}