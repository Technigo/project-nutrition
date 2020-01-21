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
            <div class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="headerInfo">
                <h1>Nutrition info</h1>
    
            </div>

        </div>
    )
}