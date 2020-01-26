import React, { useState } from 'react'
import './header.css'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header>
                <div className="menu-container">
                    <button onClick={() => setShowMenu(true)}>
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
                        <p><button type="button" className="menu-button" onClick={() => setShowMenu(false)}>Close</button></p>
                    </div>
                }

                <h1>Palm oil finder</h1>


            </header>
        </>
    )
}