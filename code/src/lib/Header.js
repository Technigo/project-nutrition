import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: white;
    width: 100%;
    max-width: 1088px;
    height: 56px;
    display: flex;
    position: sticky;
    top: 0;
    padding: 0 16px;

    h6 {
      font-size: 20px;
    }

    a{
      color: orange;
    }
`

export const Header = () => {
  const header = useSelector((store) => store.userinterface.header)
  console.log(header)

  return (
    <>
      <HeaderContainer>
        {(header === "Scanner" || header === "Help") && <NavLink to="/home/" ><FontAwesomeIcon icon="chevron-left" />Go back</NavLink>}
        <h6>{header}</h6>
      </HeaderContainer>
    </>
  )
}