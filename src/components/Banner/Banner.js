import React from 'react';
import './Banner.css'
import Typewriter from "typewriter-effect";
// import GraphemeSplitter from "grapheme-splitter";
import '../Header/style.css'
// import Particles from 'react-particles-js';
// import { Link } from 'react-router-dom'
import BannerImage from '../../assets/BannerImage.png'
import Resume from '../../assets/HasanMohammadNoman_Junior Software Engineer.pdf'
import SmoothList from 'react-smooth-list';
// import Particle from '../Particle/Particle.js';

// const stringSplitter = string => {
//   const splitter = new GraphemeSplitter();
//   return splitter.splitGraphemes(string);
// };
// const type = document.getElementById("type");
//   const typewriter = new Typewriter(type, {
//   loop: true,
//   delay: 50,
//   // stringSplitter
//   });
// typewriter
  
//   .pauseFor(0)
//   .typeString("Junior Software Engineer")
//   .pauseFor(300)
//   .deleteChars(24)
//  .typeString("Full Stack Developer")
//     .pauseFor(300)
//     .deleteChars(10)
//     .pauseFor(500)
//   .start();

const Banner = () => {
  

  return ( <SmoothList>
      <div className=""><div className="container hero-section">
      <div
        className="row text-start align-items-center "
        style={{ minHeight: "60vh" }}
      >
        {/* animate__animated animate__fadeInLeft  */}
        <div data-aos="fade-down-right" className="col-md-6 col-sm-12 ">
          <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><span className="text-black">Hey, I am</span> <br /> Hasan Mohammad Noman</h1>
          <h2 id="type" >
            <Typewriter
  options={{
    strings: ['Junior Software Engineer', 'Full-Stack Developer', 'Coffee Addicted'],
    autoStart: true,
    loop: true,
  }}
/>
            {/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Junior Software Engineer')
    
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
    
                .start();
            
  }}
            /> */}
          </h2>
          <p  className="text-black">
            I am a full stack developer! I have been developing real world projects with various solution. Check my resume! Find my talent from my project , ping me for more details. 
          </p>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="d-flex flex-start  ">
            <a
              className="download_btn m-1"
              style={{ textDecoration: "none" }}
              href={Resume}
              target="_blank" rel="noopener noreferrer"
            >
              Download Resume
            </a>
           
          </div>
        </div>
        {/* animate__animated animate__fadeInRight */}
                <div data-aos="fade-left"data-aos-duration="3000" className="col-md-6 col-sm-12 d-flex justify-content-between ">
                    <img src={BannerImage} className="img-fluid" alt="" />
                    </div>
          
        </div>
      </div></div>
        </SmoothList> 
   
    );
};

export default Banner;