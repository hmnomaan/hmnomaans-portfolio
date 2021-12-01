import React from 'react';
import About from '../About/About.js';
import Banner from '../Banner/Banner.js';
import Blogs from '../Blogs/Blogs.js';
import Contact from '../Contact/Contact.js';
import Projects from '../Projects/Projects.js';
// import Services from '../Services/Services.js';
import Technologies from '../Technologies/Technologies.js';
import SmoothList from 'react-smooth-list';
// import Particle from '../Particle/Particle.js';

const Home = () => {
    return (
        <div><SmoothList>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Technologies></Technologies>
            <Blogs></Blogs>
            <Contact></Contact></SmoothList>
            
        </div>
    );
};

export default Home;