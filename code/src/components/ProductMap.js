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
  background: #282828;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  height: 5vh;
`

const Title = styled.p`
  margin: 0;
  font-size: 28px;
`

const Body = styled.div`
  background-color: #ffefd5;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
`

const ClearButton = styled.button`
  color: white;
  background-color: transparent;
  font-size: 15px;
  border: none;
`

const ScanButton = styled.button`
  color: white;
  font-size: 18px;
`

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
        {shelfList.length !== 0 && <ScanButton onClick={() => setShowScanner(!showScanner)}>Scan<br /> item</ScanButton>}
        <ScanButton onClick={() => setShowAddShelf(!showAddShelf)}>Add<br /> Shelf</ScanButton>
        <Title>Fridge</Title>
        {/* {shelfList.length !== 0 && <ClearButton onClick={() => dispatch(nutrition.actions.clearAll())}>Empty<br /> fridge</ClearButton>} */}
      </Header>
      <Body image={shelfList.length === 0 ? img : ""}>
        {shelfList.length === 0 && <EmptyState />}
        {showScanner && <SetData setBarcode={setBarcode} setShowScanner={setShowScanner} />}
        {shelfList.length !== 0 &&
          <>
            {!showAddShelf && <AddProduct barcode={barcode} setBarcode={setBarcode} setShelf={setShelf} shelf={shelf} />}
            {showAddShelf && <AddShelf setShowAddShelf={setShowAddShelf} />}
            {shelfList.map((item) => {
              return (
                <>
                  <ShelfCard {...item} />
                  {item.reveal &&
                    item.products.map((product) => {
                      return <ProductCard shelf={item.name} {...product} />
                    })}
                </>
              )
            })}
          </>
        }

      </Body>
    </section>
  )
}