import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { nutrition } from '../reducers/nutrition'
import generalProducts from '../assets/generalProducts.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ShelfContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  box-shadow: grey 2px 2px 2px 2px;
  width: 300px;
  height: 300px;
  padding: 12px;
  background-color: white;
}
`

const Image = styled.img`
  width: auto;
  height: 180px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border: none;
  background: transparent;
`

const RemoveButton = styled.button`
  font-size: 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: red;
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
      <Btn onClick={() => revealProducts(item.name)}>
        <Image src={item.image ? item.image : generalProducts} alt="my image" />
        <TextWrapper>
          {item.name} ({totalItems} {item.products.length === 1 ? "item" : "items"})
        <RemoveButton onClick={() => removeItem(item.name)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </RemoveButton>
        </TextWrapper>
      </Btn>
    </ShelfContainer>

  )
}