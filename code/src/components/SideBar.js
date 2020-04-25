import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  z-index: 10;
  top: 20%;
  left: 0;
  background-color: black;
  border-radius: 15px;
  padding: 50px;
  position: sticky;
  box-shadow: grey 2px 2px 5px 5px; 
  align-self: center;
`


export const SideBar = () => {

    return (
        <Container>
            <button>Scan Item</button>
        </Container>
    )
}
