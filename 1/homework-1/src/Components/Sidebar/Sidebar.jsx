import React from 'react';
import {NavLink} from "react-router-dom";
import "./Sidebar.scss"
const Sidebar = (props) => (
    <nav>
    <ul>
        <li><NavLink exact to='/cards' activeClassName='link__selected'>Products</NavLink></li>
        <li><NavLink exact to='/cart' activeClassName='link__selected'>Cart</NavLink></li>
        <li><NavLink exact to='/favourites' activeClassName='link__selected'>Favourites</NavLink></li>

    </ul>
    </nav>
);

export default Sidebar;