import React, { useState } from 'react'
import styled from 'styled-components/macro'

// STYLED COMPONENTS
const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
`
const TabButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background: ${props => (props.active ? "#D1FFEC" : "#fff")};
  &:focus {
    outline: none;
  }
`
const Title = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: ${props => (props.active ? "#CC2936" : "#333")};
  transition: 0.6s;
  @media (max-width: 449px) {
    font-size: 16px;
  }
`
// TABBAR COMPONENT
export const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <TabContainer>
        {tabs.map((tab, index) => (
          <TabButton key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            <Title active={activeTab === index}>{tab.title}</Title>
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  )
}


