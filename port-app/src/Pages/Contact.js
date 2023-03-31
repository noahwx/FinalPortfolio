import React from "react";
import MailToBtn from "../components/MailToBtn";

const Contact = () => {
    return ( 
        <div className="wrapper">
            <h1 className="Heading">Contact Me</h1>
            <div className="Contact-Container">
                <MailToBtn label="E-Mail" mailto="mailto:noahfontenette@outlook.com" />
                <a href="https://twitter.com/noahf97" className="contact-item" target="_blank" rel="noopener noreferrer">Twitter</a> 
                <a href="https://www.instagram.com/noahf.97/" className="contact-item" target="_blank" rel="noopener noreferrer">Instagram</a> 
            </div>
        </div>
     );
}
 
export default Contact;