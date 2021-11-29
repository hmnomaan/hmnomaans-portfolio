import React from 'react';

import { NavLink,Link } from "react-router-dom";
import'./Header.css'

const Header = () => {
   
    
    return (
<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container text-white">
                    <NavLink className="navbar-brand fw-bold  text-white" to="/">
                        <img height="40px" className="py-2 navbar-logo "  alt="" />
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
                        <div className="navbar-nav  ">
                            <NavLink className="nav-link text-white" to="/"><i className="fas fa-home me-1"></i>Home</NavLink>
                            <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            <NavLink className="nav-link text-white" to="/projects">Projects</NavLink>
                            <NavLink className="nav-link text-white" to="/technologies">Technologies</NavLink>
                            <NavLink className="nav-link text-white" to="/services">Services</NavLink>
                            {/* <NavLink className="nav-link text-white" to="/contact">Contact</NavLink> */}
                             <Link
                                  to="/contact"
                                   className="nav-link text-white download_btn "
                                 style={{ textDecoration: "none" }}
                                       >
                                      Contact me
                                        </Link>
                        </div>                        
                    </div>
                    
                </div>
            </nav>
        </div>


        

    );
};

export default Header;
