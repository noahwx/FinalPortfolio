import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Header = () => {
    return ( 
        <div className='Nav'>
            <NavLink to='/' className='Nav-Logo'>
                <img src={logo} alt='logo'/>
            </NavLink>
            <div className='NavItems'>
                <NavLink to='/' className='NavItem'>Home</NavLink>
                <NavLink to='/About' className='NavItem'>About</NavLink>
                <NavLink to='/Work' className='NavItem'>Work</NavLink>
                <NavLink to='/Blog' className='NavItem'>Blog</NavLink>
                <NavLink to='/Contact' className='NavItem'>Contact</NavLink>
            </div>
        </div>
    );
}
 
export default Header;