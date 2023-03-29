import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return ( 
        <div>
           <div className='Desktop-Wrapper'>
                <h1 className="Page-Title">About Me</h1>
                <p className="Page-Para">
                    I am an experienced professional with expertise in <strong>Data Analysis, Front-end development, Excel, Tableau, and Microsoft Power BI</strong>. With my <strong>Python, SQL, React, and Excel</strong> proficiency, I can perform various data operations such as filtering, sorting, summarizing data, creating charts, and running complex calculations. I also have hands-on experience using <strong>Tableau and Microsoft Power BI</strong> to visualize data and create interactive dashboards.
                </p>
                <p className="Page-Para">
                    I have a deep understanding of various statistical and data visualization tools, and I have worked on several projects that have helped me hone my skills in these areas. I can develop user-friendly interfaces for web applications using React and have hands-on experience in front-end technologies and frameworks. Additionally, I am skilled in Excel and can use it to perform statistical analysis, create models, and automate repetitive tasks.
                </p>
                <p className="Page-Para">
                    Overall, my experience in data analysis and front-end development, combined with my expertise in Python, SQL, React, Excel, Tableau, and Microsoft Power BI, makes me a versatile and valuable addition to any team. I am a problem solver who can work collaboratively in a team environment and is always keen to learn and grow. My wide range of skills enables me to handle challenging projects and deliver meaningful insights that can help businesses make informed decisions.
                </p>
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
                <h1 className='Home-Text-1'>About Me</h1>
            </div>
            <div className='background'></div>
        </div>
     );
}
 
export default About;