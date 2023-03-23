import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Header = () => {
    return ( 
        <div className="Header">
            <NavLink to="/" className='Header-Logo'><img src={logo} alt='logo'/></NavLink>
            <div className="Header-Items">
                <NavLink to="/" className='Header-Item'>Home</NavLink>
                <NavLink to="/pages/About" className='Header-Item'>About</NavLink>
                <NavLink to="/pages/Work" className='Header-Item'>Work</NavLink>
                <NavLink to="/pages/Contact" className='Header-Item'>Contact</NavLink>
            </div>
        </div>
     );
}
 
export default Header;