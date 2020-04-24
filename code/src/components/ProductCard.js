import React from 'react'
import { useDispatch } from 'react-redux'
import { nutrition } from '../reducers/nutrition'

export const ProductCard = ({...item}) => {
  const dispatch = useDispatch()
  const removeItem = code => {
    dispatch(nutrition.actions.clearItem({productCode: code}))
  }

  return (
    <section>
      <img src={item.product.image_url} />
      <h2>{item.product.product_name}</h2>
      <h2>{item.product.brands}</h2>
      <button onClick={() => removeItem(item.code)}>x</button>

    </section>
    
  )
}