import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav = styled.nav`
    background-color: white;
    width: 100%;
    max-width: 1088px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 56px;
    -webkit-box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 14px -4px rgba(0,0,0,0.75);
    padding: 0 16px;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    a {
      color: rgb(251, 185, 0);
    }

    svg {
      font-size: 24px;
    }

    #scanner{
      color: white;
      position: absolute;
      bottom: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      background-color: rgb(251, 185, 0);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid white;

      a {
        color: white;
      }
    }
`

export const Navbar = () => {

  return (
    <Nav>
      <ul>
        <li><NavLink to="/home/" ><FontAwesomeIcon icon="home" /></NavLink></li>
        <li id="scanner"><NavLink to="/scanner/" activeStyle={{ color: "red" }}><FontAwesomeIcon icon="barcode" /></NavLink></li>
        <li><NavLink to="/help/" activeStyle={{ color: "red" }}><FontAwesomeIcon icon="question" /></NavLink></li>
      </ul>
    </Nav>
  )
}