import React from 'react'
import styled from 'styled-components'
import { Emoji } from './Emoji'

export const Welcome = () => {
  return (
    <>
      <WelcomeText>
        Can I eat this?
    </WelcomeText>
      <EmojiWrapper>
        <Emoji emoji="🥛" label="milk" />
        <Emoji emoji="🥜" label="peanut" />
        <Emoji emoji="🥚" label="egg" />
        <Emoji emoji="🍞" label="gluten" />
        <Emoji emoji="🌱" label="soy" />
      </EmojiWrapper>
    </>
  )
}

const WelcomeText = styled.h1`
font-weight: 600;
font-size: 36px;
display: flex;
justify-content:center;
margin-top: 45px;
`

const EmojiWrapper = styled.div`
display: flex;
justify-content:center;
`

