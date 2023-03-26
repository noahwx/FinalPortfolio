import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {
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
            <div className='background'></div>
        </div>
     );
}
 
export default Work;