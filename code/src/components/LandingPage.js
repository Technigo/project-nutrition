import React from 'react'
import { Link } from 'react-router-dom'

import './css/landingpage.css'



export const LandingPage = () => {

  return (

    <div className="landing-page">
      <h2>Welcome to find out facts about food!</h2>

      {/* <img src="assets/fruit-heart.png" /> */}

      <img src="assets/eggs.jpg" />


      <br />
      <Link to="/scan">
        <button className="get-started-btn"> Get started >></button>
      </Link>
    </div>
  )
}