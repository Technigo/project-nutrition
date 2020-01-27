import React from 'react'
import './css/footer.css'



export const Footer = () => {
  return (
    <div className="footer-container">
      <h4>About this site!</h4>
      <p>The data is taken from Open Food Facts, a free and open database. If you have some issues with scanning or finding products,
         please visit <a href="https://world.openfoodfacts.org/" target="_blank">Open Food Facts</a></p>
    </div>
  )
}