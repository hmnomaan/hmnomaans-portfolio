import React from 'react';
import './Banner.css'
import '../Header/style.css'
// import { Link } from 'react-router-dom'
import BannerImage from '../../assets/BannerImage.png'
import Resume from '../../assets/HasanMohammadNoman_Junior Software Engineer.pdf'
const Banner = () => {
    return (
        <div className="container">
      <div
        className="row text-start align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="col-md-6 col-sm-12">
          <h1>hey, i am <br /> Hasan Mohammad Noman</h1>
          <h2>Joniur Software Engineer</h2>
          <p>
            I am a full stack developer! check my resume! Find my talent from my project , ping me for more details.
          </p>

          <div className="d-flex flex-start">
            <a
              className="download_btn m-1"
              style={{ textDecoration: "none" }}
              href={Resume}
              download="HasanMohammadNoman-Junior Software Engineer"
            >
              Download Resume
            </a>
           
          </div>
        </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-between">
                    <img src={BannerImage} className="img-fluid" alt="" />
                    </div>
          
        </div>
      </div>
   
    );
};

export default Banner;