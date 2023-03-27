import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    
    return ( 
        <div>
            <div className='Desktop-Wrapper'>
                <h1 className='Home-Text-1'>Hello, My Name is Noah Fontenette</h1>
                <h2 className='Home-Text-2'>With Experince as a&nbsp;<span className='scroller'></span></h2>
            </div>
            <div className='Mobile-Wrapper'>
                <div className='mobile-menu'>
                    <h4 className="mobile-btn-etcs">Menu</h4>
                    <button className='Menu-Button' onClick={handleOpen} style={{ backgroundColor: open ? 'red' : 'none' }}></button>
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
                </div>
            <div className='background'></div>
        </div>
     );
}
 
export default Home;