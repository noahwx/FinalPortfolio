import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

const Header = () => {
    return ( 
        <div className="Header">
            <NavLink to="/">
                <div className="logos">
                    <div className="logo1">
                        <img src={logo} alt='logo' className="hlogo"/>
                    </div>
                    <div className="logo2">
                        <img src={logo} alt='logo' className="hlogo"/>
                    </div>
                    <div className="logo3">
                        <img src={logo} alt='logo' className="hlogo"/>
                    </div>
                    <div className="logo4">
                        <img src={logo} alt='logo' className="hlogo"/>
                    </div>
                    <div className="logo5">
                        <img src={logo} alt='logo' className="hlogo"/>
                    </div>
                </div>
            </NavLink>
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