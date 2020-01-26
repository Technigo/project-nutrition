import React from 'react'
import { Link } from 'react-router-dom'




export const LandingPage = () => {

  return (

    <div>
      <h2>Are you excited to see some facts about food</h2>
      <Link className="next-btn" to="/scan">
        <button> Get started </button>
      </Link>
    </div>
  )
}