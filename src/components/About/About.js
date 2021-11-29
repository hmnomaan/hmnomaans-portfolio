import React from 'react';
// import {Link} from 'react-router-dom'
// import './About.css'
import AboutImage from '../../assets/LinkedIn Pro.jpg';

const About = () => {
    return (
        // ----------------------   About Section    -----------------------
        <div className="mt-3 container">
      <h5>who-am-I?</h5>
            <h1>About Me</h1><hr />
            <p>"What actually defines me is my <br /> sincererity and dedication to work"</p>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-5  mt-5">
          <img src={AboutImage} className="img-fluid" alt="" />
        </div>
        <div className="col-md-7  mt-5">
          <p className="text-start">
            Hi, I am a web developer. I am a student by profession but I am more
            inclined towards programming. I started learning web development
            from last 1st July. Before that it was just a matter of design. The
            pinnacle of development comes from the programming hero. I am still
            working on web development. Once the development is learned, the
            episode leans towards advanced design. My desire is to be a full
            stack web developer.
          </p>
          <div className="d-flex flex-start mb-4">
            <a
              href="https://m.me/hmnomaan" target="_blank" rel="noopener noreferrer"
              className="download_btn m-1"
              style={{ textDecoration: "none" }}
            >
              Ping Me
            </a>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;