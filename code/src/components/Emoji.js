import React from 'react'

export const Emoji = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label}>{emoji}</span>
  )
}

