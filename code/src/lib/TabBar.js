import React, { useState } from 'react'
import styled from 'styled-components'

// STYLED COMPONENTS
const TabContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
`
const TabButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: 0.6s;
  background: ${props => (props.active ? "#F2EAE9" : "#fff")};
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
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${props => (props.active ? "#721817" : "#333")};
  transition: 0.6s;
`
const Indicator = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.active ? "#721817" : "#f1f1f1")};
  transition: 0.6s;
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
            <Indicator active={activeTab === index} />
          </TabButton>
        ))}
      </TabContainer>
      {tabs[activeTab].render()}
    </>
  )
}


