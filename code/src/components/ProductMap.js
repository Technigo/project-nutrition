import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'
import { EmptyState } from './EmptyState'
import { SetData } from './SetData'
import { ShelfCard } from './ShelfCard'
import img from '../emptyFridge.png'
import { AddProduct } from './AddProduct'
import { ProductCard } from './ProductCard'
import { AddShelf } from './AddShelf'

const Header = styled.div`
  width: 100%;
  background: #146381;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 40px 40px 40px;
  height: 300px;
  transition: 0.2s;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
  }
`
const TitleSmallScreen = styled.p`
  font-size: 48px;
  color: #fffaf0;
  margin: 0;

  @media (min-width: 668px) {
    visibility: hidden;
    margin: -70px;
  }
`

const TitleBigScreen = styled.p`
  visibility: hidden;
  margin: -40px;

  @media (min-width: 668px) {
    visibility: visible;
    font-size: 32px;
    color: #fffaf0;
    margin: 0;
}
`

const Body = styled.div`
  background-color: #ffefd5;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
` 


const ScanButton = styled.button`
  font-size: 16px;
  border: none;
  background: #fffaf0;
  width: 190px;
  padding: 8px 3px 8px 3px;
  box-shadow: 3px 3px #fcdfa2;
  cursor: pointer;
  transition: 0.2s;
  width: 240px;

  &: active {
    box-shadow: none;
  }

  @media (min-width: 668px) {
    width: 90px;
  }
`
const AddButton = styled.button`
  color: black;
  font-size: 16px;
  background-color: #fffaf0;
  padding: 10px;
  border-radius: 50%;
  border: 0;
  box-shadow: 3px 3px #fcdfa2;
  cursor: pointer;
  transition: 0.2s;

  &: active {
    box-shadow: none;
  }
`
const ShelfContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
@media (min-width: 668px) {
  flex-flow: row wrap;
}
`


const CardContainer = styled.div`
display: flex;
flex-direction: column; `

const HamburgerWrapper = styled.div`
display: flex;
flex-direction: column; 
width: 30px;
height: 25px; 
justify-content: space-between;
`

const HamburgerFilling = styled.div`
background: white;
width: 30px;
height: 5px; 
border-radius: 5px;
`

export const ProductMap = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)
  const [showAddShelf, setShowAddShelf] = useState(false)
  const [barcode, setBarcode] = useState()
  const [shelf, setShelf] = useState()
  const shelfList = useSelector((store) => store.nutrition.list.shelves)

  return (
    <section>
      <Header>
        <TitleSmallScreen>Fridge</TitleSmallScreen>
          {shelfList.length !== 0 && <ScanButton onClick={() => setShowScanner(!showScanner)}>Scan item</ScanButton>}
        {!showAddShelf && <AddProduct barcode={barcode} setBarcode={setBarcode} setShelf={setShelf} shelf={shelf} />}
        {showAddShelf && <AddShelf setShowAddShelf={setShowAddShelf} />}
        {!showScanner && <AddButton onClick={() => setShowAddShelf(!showAddShelf)}>Add<br /> Shelf</AddButton>}
        <TitleBigScreen>Fridge</TitleBigScreen>
      </Header>
      <Body image={shelfList.length === 0 ? img : ""}>
        {shelfList.length === 0 && <EmptyState />}
        {showScanner && <SetData setBarcode={setBarcode} setShowScanner={setShowScanner} />}
        {shelfList.length !== 0 &&
          <>
            <ShelfContainer>
            {shelfList.map((item) => {
              return (
                <CardContainer>
                  <ShelfCard {...item} />
                  {item.reveal &&
                    item.products.map((product) => {
                      return <ProductCard shelf={item.name} {...product} />
                    })}
                </CardContainer>
              )
            })}</ShelfContainer>
          </>
        }

      </Body>
    </section>
  )
}