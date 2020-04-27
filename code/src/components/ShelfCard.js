import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'
import generalProducts from '../assets/generalProducts.png'

const ShelfContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16px;
  box-shadow: grey 2px 2px 2px 2px;
`

const Image = styled.img`
  height: 200px;
  width: auto;
  display: flex;
  flex-direction: column;
  `

const TextWrapper = styled.div`
  padding: 16px;
  display: flex;
  align -items: center;
  justify-content: space-between;
`
const Btn = styled.button`
  font-size: 16px;
`

const RemoveButton = styled.button`
  font-size: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
`

export const ShelfCard = ({ ...item }) => {
  const dispatch = useDispatch()
  let totalItems = 0

  item.products.forEach((x) => totalItems += x.quantity)





  const removeItem = name => {
    dispatch(nutrition.actions.removeShelf({ shelfName: name }))
  }

  const revealProducts = (shelfName) => {
    dispatch(
      nutrition.actions.revealProducts({ shelfName: shelfName, reveal: !item.reveal })
    )
  }

  return (
    <ShelfContainer>
      <Btn> 
        <Image src={generalProducts} alt="my image" onClick={() => revealProducts(item.name)} />
        <TextWrapper>
         {item.name} ({totalItems} {item.products.length === 1 ? "item" : "items"})
        <RemoveButton onClick={() => removeItem(item.name)}>[x]</RemoveButton>
        </TextWrapper>  
        </Btn>
    </ShelfContainer>

  )
}