import React from 'react';

import { NavLink,Link } from "react-router-dom";
import './Header.css'


const Header = () => {
   
 
    return (
        <div className=""><div className="fixed-top ">
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container text-white  ">
                    <NavLink className="navbar-brand  fw-bold  text-white" to="/">
                       
                         <h2>@hmnomaan</h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* social links */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav fw mx-auto ">
                            <a title="StackOverFlow"className="nav-link text-white" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/9086031/hm-nomaan"><i className="fab fa-stack-overflow text-white p-2 me-1"></i></a>
                            {/* StackOverFlow */}
                            <a title="LinkedIn" className="nav-link text-white" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hmnomaan"><i className="fab fa-linkedin text-white p-2 me-1"></i></a>
                            {/* LinkedIn */}
                            <a title="GitHub" className="nav-link text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/hmnomaan"><i className="fab fa-github text-white p-2 me-1  "></i></a>
                            {/* Github */}
                           
                        </div>
                        {/* navigation bar */}
                        <div className="navbar-nav   ">
                            <NavLink className="nav-link text-white" to="/home"><i className="fas fa-home me-1"></i>Home</NavLink>
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            <NavLink className="nav-link text-white" to="/projects">Projects</NavLink>
                            <NavLink className="nav-link text-white" to="/technologies">Technologies</NavLink>
                            {/* <NavLink className="nav-link text-white" to="/expertise">Expertise</NavLink> */}
                            {/* <NavLink className="nav-link text-white" to="/contact">Contact</NavLink> download_btn*/}
                             <Link
                                  to="/myblogs"
                                   className="nav-link text-white  "
                                 style={{ textDecoration: "none" }}
                                       >
                                      MyBlog
                            </Link>
                             <Link
                                  to="/contact"
                                   className="me-1 nav-link text-white  "
                                 style={{ textDecoration: "none" }}
                                       >
                                      ContactMe
                            </Link>
                            
                            {/* <div className="col-md-2 col-sm-12 " style={{textDecoration:"none"}}> */}
                               
                                    <a style={{ textDecoration: "none" }} href="mailto:hasannoman31@gmail.com" target="_blank" rel="noopener noreferrer"><button className="me-1 bg-gradient-warning download_btn" > <span className="text-white">Get a Qoute</span>  </button></a> 
                                
                            
                        </div>                        
                    </div>
                    
                </div>
            </nav>
        </div></div>



        

    );
};

export default Header;
