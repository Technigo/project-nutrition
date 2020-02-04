import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scanner } from 'reducers/scanner'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Heading = styled.h1`
  color: #df3457;
  text-align: center;
  text-transform: uppercase;
`

const Message = styled.p`
  text-align: center;
  font-size: 1.5rem;
`

export const Header = () => {
  const dispatch = useDispatch()
  const showScanner = useSelector((state) => state.scanner.showScanner)
  return (
    <HeaderStyled>
      <Heading>Check Your Macro</Heading>
      <Message>
        Scan the barcode and check macro of 100g/ml of product
      </Message>
      {!showScanner && (
        <button
          type="button"
          onClick={() => dispatch(scanner.actions.setShowScanner(true))}>
          Scan product
        </button>
      )}
    </HeaderStyled>
  )
}
