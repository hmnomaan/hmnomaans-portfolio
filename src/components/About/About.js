import React from 'react';
// import {Link} from 'react-router-dom'
import './About.css'
import AboutImage from '../../assets/LinkedIn Pro.jpg';
import SmoothList from 'react-smooth-list';

const About = () => {
    return (
        // ----------------------   About Section    -----------------------
<SmoothList><div className="about-me" ><div className="  container">
    
            <h1 className="text-black ">About Me</h1>
            <p>Does Anybody Told You about Me? if not, read this</p>
      <div className="row justify-content-between align-items-center">
        <div data-aos="fade-right" data-aos-duration="3000"className="col-md-5  mt-5">
          <img src={AboutImage} className="img-fluid" alt="" />
        </div>
        <div data-aos="fade-left" className="col-md-7  mt-5">
            <p className="text-start text-dark"> 
              
              I am a motivated focused and visionary software developer with robust
problem-solving skills and proven experience in creating and designing
software in a test-driven environment with 1years of industry experience. <br /> <br /> I have completed 8 projects on various technologies. Such as JavaScript, MongoDB, Express, Reactjs, Java, SQLite, Spring, NPM, Nodejs, SQL, AWS Lamda etc. I am now Looking forward to getting a professional environment. <br /><br />
              
               I have also experience working in a team on system design and software architecture, which is the most important thing in robust Software Engineering and I have enough dedication to building creativity through coding and hard work. I am focusing on developing new features and on the coding logic. Let me know if you have any other inquiries. I am looking forward to meeting my dream team. Kudos!
<br /><br />
              <cite>"What actually defines me is my sincererity and dedication to work"</cite>
            </p>
            
          <div className="d-flex flex-start mb-4">
            <a
              href="mailto:hasannoman31@gmail.com" target="_blank" rel="noopener noreferrer"
              className="download_btn m-1"
              style={{ textDecoration: "none" }}
            >
              Ping Me
            </a>
            
          </div>
        </div>
      </div>
    </div></div></SmoothList>
    );
};

export default About;