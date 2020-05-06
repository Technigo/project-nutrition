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
    justify-content: space-between;
    align-items: flex-end;
    position: sticky;
    top: 0;
    padding: 0 16px;

    a{
      color: white;
      padding-bottom: 5px;
    }
`

export const HeaderHeadLine = styled.h2`
    font-family: 'Hank Round Bold';
    color: white;
    font-size: 32px;
    float: right;
`;

export const Header = () => {
  const header = useSelector((store) => store.userinterface.header)
  console.log(header)

  return (
    <>
      <HeaderContainer>
        {(header === "Scanner" || header === "Help" || header === "Found food" || header === "Error") && <NavLink to="/home/" ><FontAwesomeIcon icon="chevron-left" />Go back</NavLink>}
        <HeaderHeadLine>{header}</HeaderHeadLine>
      </HeaderContainer>
    </>
  )
}