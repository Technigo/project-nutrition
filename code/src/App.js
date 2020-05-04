import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { foodproducts } from 'reducers/foodproducts'
import { userinterface } from 'reducers/userinterface'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Scanner } from './pages/Scanner'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { AppContainer } from './lib/Containers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBarcode, faChevronLeft, faHome, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faBarcode, faChevronLeft, faHome, faEllipsisV)

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
        <AppContainer>
          <Header />
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/scanner" exact>
              <Scanner />
            </Route>
          </Switch>
          <Navbar />
        </AppContainer>
      </Provider>
    </>
  )
}
