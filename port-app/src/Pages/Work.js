import React from "react";
import MobileHeader from "../components/MobileHeader";

const Work = () => {
    return ( 
        <div>
            <div className="wrapper">
                <h1 className="Heading">Work</h1>
                <div className="Work-Wrapper">
                    <div className="Work-Item">
                        <div className="Work-Item-Info">
                            <h2 className="Work-Item-Heading">Work Item 1</h2>
                            <p className="Work-Item-Para">Work Description</p>
                        </div>
                        <img className="WorkImg" src="https://images.unsplash.com/photo-1679210208332-a58e411412ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="Work Item 1"/>
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