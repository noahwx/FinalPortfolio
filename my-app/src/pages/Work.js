import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return ( 
        <div>
            <div className='Desktop-Wrapper'>
                <h1 className="Page-Title">Work</h1>
                <div className="work">
                    <NavLink to='/' className='work-link'>
                        <div className="work-content">
                            <div className="work-img"></div>
                            <h2 className="work-title">Work Title</h2>
                            <p className="work-descrip">Another day another idk!</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='work-link'>
                        <div className="work-content">
                            <div className="work-img"></div>
                            <h2 className="work-title">Work Title</h2>
                            <p className="work-descrip">Another day another idk!</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className='work-link'>
                        <div className="work-content">
                            <div className="work-img"></div>
                            <h2 className="work-title">Work Title</h2>
                            <p className="work-descrip">Another day another idk!</p>
                        </div>
                    </NavLink>
                </div>
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
                <h1 className='Home-Text-1'>Work</h1>
            </div>
            <div className='background'></div>
        </div>
     );
}
 
export default Work;