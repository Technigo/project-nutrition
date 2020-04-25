import React from 'react'
import { useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'

export const ShelfCard = ({ ...item }) => {
  const dispatch = useDispatch()
  const removeItem = name => {
    dispatch(nutrition.actions.removeShelf({ shelfName: name }))
  }

  const revealProducts = (shelfName) => {
    dispatch(
      nutrition.actions.revealProducts({ shelfName: shelfName, reveal: !item.reveal })
    )
  }

  return (
    <section>
      <button onClick={() => revealProducts(item.name)}>{item.name} ({item.products.length} {item.products.length === 1 ? "item" : "items"})</button>
      <button onClick={() => removeItem(item.name)}>x</button>
    </section>

  )
}