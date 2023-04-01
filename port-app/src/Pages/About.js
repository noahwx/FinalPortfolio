import React from "react";
import MobileHeader from "../components/MobileHeader";

const About = () => {
    return ( 
        <div>
            <div className='wrapper'>
                <h1 className="Heading">About Me</h1>
                <p className="about-para">Hi, my name is Noah Fontenette. I'm a focused and driven person with five years of experience in Data Analysis, Front-End Development, and Graphic Design. I enjoy working with others and always strive to learn more than I know today. Contact me today so we can get to work. </p>
                <div className="About-Image-Stack">
                    <div className="About-Images">
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1679329614246-f099ba78c6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="about-img"/>
                        </a>
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1678265757297-d1e3b6a63cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="" className="about-img1"/>
                        </a>
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1675981004381-6305f7dd07fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" className="about-img2"/>
                        </a>
                    </div>
                </div>
                <footer>
                    <div className="Footer-Wrapper">
                        <h4 className="Footer-Item">Designed by Noah Fontenette © 2023</h4>
                    </div>
                </footer>
            </div>
            <div className="Mobile-Wrapper">
                <MobileHeader />
                <h1 className="Mobile-Heading">About Me</h1>
                <p className="Mobile-about-para">Hi, my name is Noah Fontenette. I'm a focused and driven person with five years of experience in Data Analysis, Front-End Development, and Graphic Design. I enjoy working with others and always strive to learn more than I know today. Contact me today so we can get to work. </p>
                <div className="About-Image-StackM">
                    <div className="About-ImagesM">
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1679329614246-f099ba78c6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="about-imgM"/>
                        </a>
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1678265757297-d1e3b6a63cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="" className="about-img1M"/>
                        </a>
                        <a href="/About">
                            <img src="https://images.unsplash.com/photo-1675981004381-6305f7dd07fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" className="about-img2M"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;