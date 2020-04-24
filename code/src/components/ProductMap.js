import React from 'react'
import { useSelector } from 'react-redux'
import { nutrition } from '../reducers/nutrition'
import { EmptyState } from './EmptyState'

export const ProductMap = () => {
  const productList = useSelector((store) => store.list)
  return (
    <section>
      <section>
        <h1>Header</h1>
      </section>
      {!productList && <EmptyState />}
    </section>
  )
}