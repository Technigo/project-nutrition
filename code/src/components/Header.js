import React, { useState } from 'react'
import './header.css'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header>
            <div className="menu-container">
                <button onClick={() => setShowMenu(!showMenu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>

            {showMenu &&
                <div className="menu">
                    <p>Why not palm oil?</p>
                    <p>How to use the scanner</p>
                    <p>Contact</p>
                </div>
            }
            <h1>Palm oil finder</h1>
        </header>
    )
}