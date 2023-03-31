import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Work from '../Pages/Work';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const Main = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='work' element={<Work />} />
            <Route path='blog' element={<Blog />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
        </Routes>
    );
}
 
export default Main;