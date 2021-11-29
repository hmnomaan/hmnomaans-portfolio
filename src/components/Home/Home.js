import React from 'react';
import About from '../About/About.js';
import Banner from '../Banner/Banner.js';
import Contact from '../Contact/Contact.js';
import Projects from '../Projects/Projects.js';
import Services from '../Services/Services.js';
import Technologies from '../Technologies/Technologies.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Technologies></Technologies>
            <Services></Services>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;