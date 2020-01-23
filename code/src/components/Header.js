import React, { useState } from 'react'
import './header.css'

export const Header = () => {
// const [showMenu, setShowMenu] = useState(false);


    return (
    <>
    <header>
    <div className="menu-container">
        {/* <button type="button" onClick={setShowMenu()}>   */}
            {/* Meny */}
            {/* {setShowMenu &&<p>menyn säger hej</p>} */}
        {/* </button> */}
    <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
     </div>
    <div className="menu">
        <p>Why not palm oil?</p>
        <p>How to use the scanner</p>
        <p>Contact</p>
    </div>
    </div>
    <h1>Palm oil finder</h1>
    </header>
    </>
    )
}