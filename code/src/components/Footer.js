import React from 'react'
import './footer.css'

export const Footer = () => {


  return (
    <footer>
      <span className="barcodeHead">scanner</span>
        <p>
          App built using 
            <span className="orange"> www.</span>
            <span className="pink">world.</span>
            <span className="green">openfoodfacts</span>
            <span className="blue">.org </span> 
          API
        </p>    
    </footer>
  );
};