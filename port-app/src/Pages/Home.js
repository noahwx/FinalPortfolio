import React from "react";
import ContactForm from "../components/ContactForm";
import MobileHeader from "../components/MobileHeader";

const Home = () => {
    return ( 
        <div>
            <div className='wrapper'>
                <div className='Main-Text-Items'>
                    <h1 className='Main-Text-Item'>Development.</h1>
                    <h1 className='Main-Text-Item'>Analysis.</h1>
                    <h1 className='Main-Text-Item'>Design.</h1>
                </div>
                <div className="Experince-Section">
                    <div className="Experince-Heading-Wrapper">
                        <div className="Shape"></div>
                        <div className="Shape2"></div>
                        <h1 className="Heading-Experience">Experience</h1>
                    </div>
                    <div className="Experince-Boxes">
                        <div className="Experince-Box">
                            <h1 className="Experince-Box-Heading">Data Analysis</h1>
                            <h1 className="Experince-Box-Heading">Front-End Development</h1>
                            <h1 className="Experince-Box-Heading">Graphic Design</h1>
                        </div>
                    </div>
                </div>
                <div className="Contact-Form">
                    <div className="Contact-Form-Head-Wrapper">
                        <div className="Shape"></div>
                        <div className="Shape2"></div>
                        <h1 className="Contact-Form-Heading">Contact Me</h1>
                    </div>
                    <ContactForm />
                </div>
                <footer>
                    <div className="Footer-Wrapper">
                        <h4 className="Footer-Item">Designed by Noah Fontenette © 2023</h4>
                    </div>
                </footer>
                <img className="background" src="https://images.unsplash.com/photo-1614522562493-455408036ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
            </div>
            <div className="Mobile-Wrapper">
                <MobileHeader />
                <div className='Main-Text-Items-Mobile'>
                    <h1 className='Main-Text-Item-Mobile'>Development.</h1>
                    <h1 className='Main-Text-Item-Mobile'>Analysis.</h1>
                    <h1 className='Main-Text-Item-Mobile'>Design.</h1>
                </div>
                <div className="Mobile-Experince">
                    <div className="Experince-Heading-Wrapper">
                        <div className="Shape"></div>
                        <div className="Shape2"></div>
                        <h1 className="Heading-Experience">Experience</h1>
                    </div>
                    <div className="Experince-Boxes">
                        <div className="Experince-Box">
                            <h1 className="Experince-Box-Heading">Data Analysis</h1>
                            <h1 className="Experince-Box-Heading">Front-End Development</h1>
                            <h1 className="Experince-Box-Heading">Graphic Design</h1>
                        </div>
                    </div>
                </div>
                <img className="mobilebackground" src="https://images.unsplash.com/photo-1614522562493-455408036ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
            </div>
        </div>
    );
}
 
export default Home;