import React from 'react'
import { Link } from 'react-router-dom'

import './css/landingpage.css'



export const LandingPage = () => {

  return (

    <div className="landing-page">
      <h2>Are you excited to see some facts about food?</h2>

      <img src="assets/no-image.png" />
      <Link to="/scan">
        <button className="get-started-btn"> Get started >></button>
      </Link>
    </div>
  )
}