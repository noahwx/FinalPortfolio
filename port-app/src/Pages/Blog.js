import React from "react";
import MobileHeader from "../components/MobileHeader";

const Blog = () => {
    return ( 
        <div>
            <div className="wrapper">
                <h1 className="Heading">Blog</h1>
            </div>
            <div className="Mobile-Wrapper">
                <MobileHeader />
            </div>
        </div>
     );
}
 
export default Blog;