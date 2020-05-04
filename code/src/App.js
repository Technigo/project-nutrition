import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { foodproducts } from 'reducers/foodproducts'
import { userinterface } from 'reducers/userinterface'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Scanner } from './pages/Scanner'

const reducer = combineReducers({
  foodproducts: foodproducts.reducer,
  userinterface: userinterface.reducer
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
          <Route path="/scanner" exact>
            <Scanner />
          </Route>
        </Switch>
      </Provider>
    </>
  )
}
