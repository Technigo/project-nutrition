import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from '@reduxjs/toolkit'
import { nutrition } from './reducers/nutrition'
import { ProductMap } from './components/ProductMap'
import { ProductDetails } from 'components/ProductDetails'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('pairNutritionState', serializedState)
  } catch (error) {
    console.log(error)
  }
}
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('pairNutritionState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}
const reducer = combineReducers({ nutrition: nutrition.reducer })
const persistedState = loadFromLocalStorage()
const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)))
store.subscribe(() => saveToLocalStorage(store.getState()))

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <ProductMap />
          </Route>
          <Route path="/:product" exact>
            <ProductDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
