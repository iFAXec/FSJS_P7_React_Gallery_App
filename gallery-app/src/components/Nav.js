import React from "react";
import { NavLink } from "react-router-dom";

/**
 * The Nav function initiated 
 * @returns - a list of navigation elements
 */

const Nav = () => {

    return (

        <nav className="main-nav">
            <ul>
                <li><NavLink to='/sunsets'>Sunset</NavLink></li>
                <li><NavLink to='/mountains'>Mountains</NavLink></li>
                <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
            </ul>
        </nav>

    )

}


export default Nav


