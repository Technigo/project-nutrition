import React from 'react'
import 'components/header.css'
// import { useDispatch } from 'react-redux'
// import { TodoTasksSummary } from './TodoTasksSummary';
// import { ClearButton } from './ClearButton';
export const Header = () => {
    // const dispatch = useDispatch()
    return (
        <div className="headerContainer">
            {/* <!--Creating a hamburger menu with lines, made by div's--> */}
            <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="headerInfo">
                <h1>Food scanner</h1>

            </div>
            <nav
                className="headerNavigation">
                <p href="#">Home</p>
                <p href="#">Subscribe</p>
                <p href="#">Search</p>
            </nav>
        </div>
    )
}


