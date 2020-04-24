import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'
import { EmptyState } from './EmptyState'
import { SetData } from './SetData'
import { ProductCard } from './ProductCard'

export const ProductMap = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)
  const productList = useSelector((store) => store.nutrition.list)
  console.log(productList)

  return (
    <section>
      <section>
        <h1>Header</h1>
        {productList.length !== 0 && <button onClick={() => setShowScanner(!showScanner)}>Scan item</button>}
        <button onClick={() => dispatch(nutrition.actions.clearAll())}>Clear all</button>
      </section>
      {productList.length === 0 && <EmptyState />}
      {showScanner && <SetData />}
      {productList.length !== 0 &&<section>
        {productList.map((item) => {
          return (
           <ProductCard {...item}/>
          )
        })}
      </section>}
    </section>
  )
}