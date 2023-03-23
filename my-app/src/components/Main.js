import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

const Main = () => {
    return ( 
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pages/about" element={<About />} />
            <Route exact path="/pages/work" element={<Work />} />
            <Route exact path="/pages/contact" element={<Contact />} />
        </Routes>
     );
}
 
export default Main;