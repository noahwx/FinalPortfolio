import React from "react";
import MobileHeader from "../components/MobileHeader";

const Work = () => {
    return ( 
        <div>
            <div className="wrapper">
                <h1 className="Heading">Work</h1>
                <div className="Work-Wrapper">
                    <div className="Work-Item">
                        <h2 className="Work-Item-Heading">Work Item 1</h2>
                        <p className="Work-Item-Para">Work Description</p>
                        <img src="https://images.unsplash.com/photo-1679602206624-04d674a95fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80" alt="Work Item 1" className="Work-Item-Img"/>
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
            </div>
        </div>
     );
}
 
export default Work;