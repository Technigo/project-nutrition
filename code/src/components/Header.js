import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = () => {

  return (
    <header>
      <p>go back <FontAwesomeIcon icon="chevron-left" /></p>
      <h1>Current page is</h1>
    </header>
  )
}