import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Camera } from './pages/Camera'


export const App = () => {

  const location = useLocation()

  return (
    <>
      <header></header>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          This is the main page
        </Route>
        <Route path="/camera" exact>
          <Camera />
        </Route>
      </Switch>

    </>
  )
}
