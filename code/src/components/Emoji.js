import React from 'react'
import styled from 'styled-components'

export const Emoji = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label}>{emoji}</span>
  )
}

