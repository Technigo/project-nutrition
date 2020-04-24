import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'
import { EmptyState } from './EmptyState'
import { SetData } from './SetData'
import { ProductCard } from './ProductCard'
import img from '../emptyFridge.png'

const Header = styled.div`
  width: 100%;
  background: #282828;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 5vh;
`

const Title = styled.p`
  margin: 0;
  font-size: 28px;
`

const Body = styled.div`
  background-color: #a89797;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  align-items: center;
  padding: 20px;
`

export const ProductMap = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)
  const productList = useSelector((store) => store.nutrition.list)
  console.log(productList)

  return (
    <section>
      <Header>
        <Title>Fridge</Title>
        {productList.length !== 0 && <button onClick={() => setShowScanner(!showScanner)}>Scan item</button>}
        <button onClick={() => dispatch(nutrition.actions.clearAll())}>Clear all</button>
      </Header>
      <Body image={productList.length === 0 ? img : ""}>
        {productList.length === 0 && <EmptyState />}
        {showScanner && <SetData />}
        {productList.length !== 0 &&
          productList.map((item) => {
            return (
              <ProductCard {...item} />
            )
          })}

      </Body>
    </section>
  )
}