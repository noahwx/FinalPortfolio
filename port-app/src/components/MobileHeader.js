import React from "react";
import { NavLink } from "react-router-dom";

const MobileHeader = () => {
    return ( 
        <div className='MobileNav'>
            <button className='MobileNavBtn'></button>
            <div className="MobileNavItems">
                <NavLink to='/' className='MobileNavItem'>Home</NavLink>
                <NavLink to='/About' className='MobileNavItem'>About</NavLink>
                <NavLink to='/Work' className='MobileNavItem'>Work</NavLink>
                <NavLink to='/Blog' className='MobileNavItem'>Blog</NavLink>
                <NavLink to='/Contact' className='MobileNavItem'>Contact</NavLink>
            </div>
        </div>
    );
}
 
export default MobileHeader;