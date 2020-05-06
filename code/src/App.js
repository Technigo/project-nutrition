import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { foodproducts } from 'reducers/foodproducts'
import { userinterface } from 'reducers/userinterface'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Scanner } from './pages/Scanner'
import { ScannedResult } from './pages/ScannedResult'
import { Help } from './pages/Help'
import { Navbar } from './lib/Navbar'
import { Header } from './lib/Header'
import { AppContainer, ContentContainer } from './lib/Containers'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarcode, faChevronLeft, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons'
import GlobalFonts from './fonts/fonts'

library.add(faBarcode, faChevronLeft, faHome, faQuestion)

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
        <GlobalFonts />
        <AppContainer>
          <Header />
          <ContentContainer>
            <Switch location={location} key={location.pathname}>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/scanner" exact>
                <Scanner />
              </Route>
              <Route path="/scannedresult" exact>
                <ScannedResult />
              </Route>
              <Route path="/help" exact>
                <Help />
              </Route>
            </Switch>
          </ContentContainer>
          <Navbar />
        </AppContainer>
      </Provider>
    </>
  )
}
