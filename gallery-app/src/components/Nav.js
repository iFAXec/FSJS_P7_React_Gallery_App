import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {

    return (

        <nav className="main-nav">
            <ul>
                <li><NavLink to='/sunsets'>Sunset</NavLink></li>
                <li><NavLink to='/mountains'>Mountains</NavLink></li>
                <li><NavLink to='/rainbows'>Rainbow</NavLink></li>
            </ul>
        </nav>

    )

}


export default Nav;


