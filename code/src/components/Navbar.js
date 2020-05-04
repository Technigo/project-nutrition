import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav } from '../lib/Nav'

export const Navbar = () => {

  return (
    <Nav>
      <ul>
        <li><FontAwesomeIcon icon="home" />Home</li>
        <li><FontAwesomeIcon icon="barcode" />Scanner</li>
        <li><FontAwesomeIcon icon="search" />Search</li>
        <li><FontAwesomeIcon icon="ellipsis-v" /></li>
      </ul>
    </Nav>
  )
}