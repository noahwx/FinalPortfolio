import React from "react";
import MobileHeader from "../components/MobileHeader";

const About = () => {
    return ( 
        <div>
            <div className='wrapper'>
                <h1 className="Heading">About Me</h1>
                <p className="about-para">Hi, my name is Noah Fontenette. I'm a focused and driven person with five years of experience in Data Analysis, Front-End Development, and Graphic Design. I enjoy working with others and always strive to learn more than I know today. Contact me today so we can get to work. </p>
            </div>
            <div className="Mobile-Wrapper">
                <MobileHeader />
            </div>
        </div>
    );
}
 
export default About;