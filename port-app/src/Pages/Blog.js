import React from "react";
import MobileHeader from "../components/MobileHeader";

const Blog = () => {
    return ( 
        <div>
            <div className="wrapper">
                <h1 className="Heading">Blog</h1>
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
 
export default Blog;