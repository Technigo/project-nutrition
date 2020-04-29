import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
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
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  height: 300px;
  transition: 0.2s;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
  }
`
const ItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 668px) {
    flex-direction: row;
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
  display: flex;
  font-size: 16px;
  border: none;
  background: #fffaf0;
  width: 190px;
  padding: 8px 3px 8px 3px;
  margin-bottom: 16px;
  box-shadow: 3px 3px #fcdfa2;
  cursor: pointer;
  transition: 0.2s;
  width: 240px;

  &: active {
    box-shadow: none;
  }

  @media (min-width: 668px) {
    width: 90px;
    height: 36px;
    margin: 32px;
  }
`
const AddButton = styled.button`
  color: black;
  font-size: 16px;
  background-color: #fffaf0;
  padding: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 0;
  box-shadow: 3px 3px #fcdfa2;
  cursor: pointer;
  transition: 0.2s;
  margin-top: -80px;

  &: active {
    box-shadow: none;
  }

  @media (min-width: 668px) {
    margin-top: 0;
  }
`
const ShelfContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-align-items: none;
  -webkit-box-align: none;
  
@media (min-width: 668px) {
  flex-flow: row wrap;
  
}
`


const CardContainer = styled.div`
display: flex;
flex-direction: column; `



export const ProductMap = () => {
  const [showScanner, setShowScanner] = useState(false)
  const [showAddShelf, setShowAddShelf] = useState(false)
  const [barcode, setBarcode] = useState()
  const [shelf, setShelf] = useState()
  const shelfList = useSelector((store) => store.nutrition.list.shelves)

  return (
    <section>
      <Header>
        <ItemContainer>
          {shelfList.length !== 0 && <ScanButton onClick={() => setShowScanner(!showScanner)}>Scan item</ScanButton>}
          {!showAddShelf && <AddProduct barcode={barcode} setBarcode={setBarcode} setShelf={setShelf} shelf={shelf} />}

          {showAddShelf && <AddShelf setShowAddShelf={setShowAddShelf} />}</ItemContainer>
        {!showScanner && <AddButton onClick={() => setShowAddShelf(!showAddShelf)}>{!showAddShelf ? 'New Shelf' : 'Back'}</AddButton>}
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