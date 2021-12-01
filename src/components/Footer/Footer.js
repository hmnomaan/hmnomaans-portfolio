import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";
// import Resume from "../../../resume/Resume_Rashedul_Islam .pdf";
const Footer = () => {
  return (<>
      <div className="footer-container mt-3 " style={{
          padding: "1rem",
      backgroundColor:"#b2beb5"}}>
      <div className="container text-start">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            <h4 className="text-start">@hmnomaan</h4>
            <p>
              Hey, i am Hasan Mohammad Noman. <br /> Full stack Developer. Ping Me!
            </p>
            <div className="social-icon">
                          <a href="https://facebook.com/hmnomaan" target="_blank" rel="noopener noreferrer" style={{
                              textDecoration: "none",
                          fontSize:"2rem"}}><i className="fab fa-facebook icon-list"></i></a>
               <a href="https://linkedin.com/in/hmnomaan" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", fontSize:"2rem"}}><i className="fab fa-linkedin icon-list mx-3"></i></a>
            </div>
          </div>
          {/* <div className="col-md-2 col-sm-12">
            <h4>Site Links</h4>
            <ul className="list-container">
              <li className="list-item">
                <Link to="/about">About</Link>
              </li>
              <li className="list-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-item">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div> */}
          
          
          <div className="col-md-4 col-sm-12  ">
            <h4>Contact</h4>
            <div>
              <i className="fas fa-envelope list-item"></i> {"   "}
              hmnomaan@gmail.com
            </div>
            <div>
              <i className="fas fa-phone-alt list-item"></i> +8801909282807
            </div>
            <div>
              <i className="fas fa-home list-item"></i> Dhaka,Bangladesh
            </div>
          </div>
          <div className="col-md-4 col-sm-12 ">
             <div className="navbar-nav fw mx-auto ">
                            <a title="StackOverFlow"className="nav-link text-black" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9086031/hm-nomaan"><i className="fab fa-stack-overflow text-black p-2 me-1"></i>StackOverFlow</a>
                            {/* StackOverFlow */}
                            <a title="LinkedIn" className="nav-link text-black" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hmnomaan"><i className="fab fa-linkedin  p-2 me-1"></i>LinkedIn </a>
                            {/* LinkedIn */}
                            <a title="GitHub" className="nav-link text-black" target="_blank" rel="noopener noreferrer" href="https://github.com/hmnomaan"><i className="fab fa-github  p-2 me-1  "></i>Github</a>
                            {/* Github */}
                            
                        </div>
            {/* <div className="">
              <h3>Want to Get Updates of <span style={{}}
              className=" fs-2 fw-bold">My New Blogs</span> ? Complete your Subscription then.</h3>
                                <input type="email" className="w-100 px-2" placeholder="Your email address" />
                                <button className="btn btn-primary mt-3">Subscribe</button>
                            </div> */}
          </div>
          </div>
              
        
          </div>
          
          
      </div>
      <div className="bg-dark mb-0  p-3">

              <p className="text-white">&copy;All Rights Reserved 2021. <br />Sincerely Designed & Developed by <a href="https://linkedin.com/in/hmnomaan" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}
              className="text-white "><span className="text-info">Hasan Mohammad Noman</span> </a> </p>
          </div></>
  );
};

export default Footer;
