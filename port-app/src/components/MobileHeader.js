import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const MobileHeader = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return ( 
        <div className='MobileNav'>
            <button onClick={handleOpen} className='MobileBtn'>
                <img src={logo} alt='logo'/>
            </button>
            {open ? (
                <div className="MobileNavItems">
                    <NavLink to='/' className='MobileNavItem'>Home</NavLink>
                    <NavLink to='/About' className='MobileNavItem'>About</NavLink>
                    <NavLink to='/Work' className='MobileNavItem'>Work</NavLink>
                    <NavLink to='/Blog' className='MobileNavItem'>Blog</NavLink>
                    <NavLink to='/Contact' className='MobileNavItem'>Contact</NavLink>
                </div>
            ) : null}
        </div>
    );
}
 
export default MobileHeader;