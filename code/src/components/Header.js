import React, { useState } from 'react'
import './header.css'
// import { useDispatch } from 'react-redux';


export const Header = () => {
const [showMenu, setShowMenu] = useState(false);

// const dispatch = useDispatch()

// {showMen}
    return (
    <>
    <header>
    <div className="menu-container">
        {/* <button type="button" onClick={setShowMenu()}>   */}
            {/* Meny */}
            {/* {setShowMenu &&<p>menyn säger hej</p>} */}
        {/* </button> */}
    {/* <div className="hamburger"> */}
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
   
{/* </div> */}
<h1>Palm oil finder</h1>

    
    </header>
    </>
    )
}