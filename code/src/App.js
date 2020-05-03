import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Camera } from './pages/Camera'

import { food } from 'reducers/food'

const reducer = combineReducers({
  food: food.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  const location = useLocation()

  return (
    <>
      <Provider store={store}>
        <header></header>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            This is the main page
        </Route>
          <Route path="/camera" exact>
            <Camera />
          </Route>
        </Switch>
      </Provider>
    </>
  )
}
