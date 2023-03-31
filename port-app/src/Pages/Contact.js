import React from "react";
import MailToBtn from "../components/MailToBtn";
import MobileHeader from "../components/MobileHeader";

const Contact = () => {
    return ( 
        <div>
            <div className="wrapper">
                <h1 className="Heading">Contact Me</h1>
                <div className="Contact-Container">
                    <MailToBtn label="E-Mail" mailto="mailto:noahfontenette@outlook.com" />
                    <a href="https://twitter.com/noahf97" className="contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                    <a href="https://www.instagram.com/noahf.97/" className="contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                </div>
                <footer>
                    <div className="Footer-Wrapper">
                        <h4 className="Footer-Item">Designed by Noah Fontenette © 2023</h4>
                    </div>
                </footer>
            </div>
            <div className="Mobile-Wrapper">
                <MobileHeader />
                <h1 className="Mobile-Heading1">Contact Me</h1>
                <div className="Mobile-Contact-Container">
                    <MailToBtn label="E-Mail" mailto="mailto:noahfontenette@outlook.com" />
                    <a href="https://twitter.com/noahf97" className="contact-item mobile-contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                    <a href="https://www.instagram.com/noahf.97/" className="contact-item mobile-contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
                </div>
            </div>
        </div>
     );
}
 
export default Contact;