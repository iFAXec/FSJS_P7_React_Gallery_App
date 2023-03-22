import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

    return (

        <nav class="main-nav">
            <ul>
                <li><Link to='/sunset'>Sunset</Link></li>
                <li><Link to='/waterfall'>Watrfall</Link></li>
                <li><Link to='/rainbow'>Rainbow</Link></li>
            </ul>
        </nav>

    )

}


export default Nav;


