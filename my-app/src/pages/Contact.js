import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return ( 
        <div>
            <div className='Desktop-Wrapper'>
                <h1 className="Page-Title">Contact</h1>
                <a href="tel:+13372413394" className="contact-link">Phone: +1 (337) 241-3394</a>
                <a href="mailto:noahfontenette@outlook.com" className="contact-link">Email Me Today</a>
                <a href="https://www.linkedin.com/in/noah-fontenette/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
                <a href="https://twitter.com/noahf97" target="_blank" rel="noreferrer" className="contact-link">Twitter</a>
                <a href="https://instagram.com/noahf.97" target="_blank" rel="noreferrer" className="contact-link">Instagram</a>
            </div>
            <div className='Mobile-Wrapper'>
                <div className='mobile-menu'>
                    <h4 className="mobile-btn-etcs">Menu</h4>
                    <button className='Menu-Button' onClick={handleOpen}></button>
                        {open ? (
                            <div className='mobile-Nav'>
                                <div className='mobile-NavItems'>
                                    <NavLink to='/' className='mobile-NavItem'>Home</NavLink>
                                    <NavLink to='/pages/About' className='mobile-NavItem'>About</NavLink>
                                    <NavLink to='/pages/Work' className='mobile-NavItem'>Work</NavLink>
                                    <NavLink to='/pages/Contact' className='mobile-NavItem'>Contact</NavLink>
                                </div>
                            </div>
                        ) : null}
                </div>
                <h1 className='Home-Text-1'>Contact</h1>
            </div>
            <div className='background'></div>
        </div>
     );
}
 
export default Contact;