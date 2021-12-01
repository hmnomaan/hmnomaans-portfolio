import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from "react-bootstrap";
import '../Projects/Projects.css'
import WatchPlanetProject1 from '../../assets/projects/watch-planet.png'
import TourInChinaProject2 from '../../assets/tourinchina.png'
import nnbhealthCareProject3 from '../../assets/nnb-healthCare.png'
const Projects = () => {
    return (
         <div className="projects projects-container ">
      <div className="container  mb-5">
   
        <h1 className="text-black mt-5">Projects</h1>
        <p>proving my self in real worlds project with various technology</p>
        <Row xs={1} md={3} className="g-4 mt-5">
          <Col>
           <Card data-aos="fade-up"
     data-aos-duration="3000"className="  project-container bg-light">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={WatchPlanetProject1}
                    alt=""
                    className="zoom img-fluid"
                    />
                    <p className="text-black mt-2"><strong>WatchPlanet</strong> - A Niche Based E-commerce Website</p>
                    <small className="text-justify d-flex justify-content-between  text-black ">●A Responsive website with Restful  
● Users can buy a product and see the dashboard and submit a
review
● Users can remove orders and users can manage their orders
● Only admin can add more products, make admin, control all
orders, manage all products.</small>
                </Card.Text>
                
                  <div className="d-flex justify-content-around">
                  <small className="rounded px-1 text-white bg-info"> mongodb</small>
                  <small className="rounded px-1 text-white bg-warning">express</small>
                  <small className="rounded px-1 text-white bg-primary">react</small>
                  <small className="rounded px-1 text-white bg-success">nodejs</small>
                  </div>
                <div className="d-flex justify-content-around mt-2">
                  <a
                    href="https://watch-planet.netlify.app"
                    target="_blank" rel="noopener noreferrer"  
                  >
                    <h5 ><i class="fas fa-globe text-black  me-1 fs-6 "></i>Live-Site</h5>
                                    </a>
                                    <a
                    href="https://github.com/hmnomaan/niche-website-client-side-assignment12"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 ><i className="fab fa-github text-black  me-1 fs-6  "></i>Client-Side</h5>
                  </a>
                  <a
                    href="https://github.com/hmnomaan/niche-website-server-side-assignment12"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 ><i className="fab fa-github text-black me-1 fs-6  "></i>Server-Side</h5>
                  </a>
                  </div>
                 <Link to='/watchplanet'> <button className="btn bg-primary text-white px-5">View Details</button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
           <Card data-aos="fade-up"
     data-aos-duration="3000"className="project-container bg-light">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={TourInChinaProject2}
                    alt=""
                     className=" img-fluid zoom"
                    />
                    <p className="text-black mt-2"><strong>TourInChina
                      </strong> - A Tourism Management Website</p>
                    <small className="text-justify d-flex justify-content-between  text-black ">● A Responsive MERN stack website with Restful API
● Tour Booking Website, user can login with google
● Users can remove orders and users can manage their orders
● Users can also access as admin, and add more packages,
control all orders, manage all products.</small>
                </Card.Text>
                
                  <div className="d-flex justify-content-around">
                  <small className="rounded px-1 text-white bg-info"> mongodb</small>
                  <small className="rounded px-1 text-white bg-warning">express</small>
                  <small className="rounded px-1 text-white bg-primary">react</small>
                  <small className="rounded px-1 text-white bg-success">nodejs</small>
                  </div>
                <div className="d-flex justify-content-around mt-2">
                  <a
                    href="https://tourinchina.netlify.app/"
                    target="_blank" rel="noopener noreferrer"  
                  >
                    <h5 ><i class="fas fa-globe text-black  me-1 fs-6 "></i>Live-Site</h5>
                                    </a>
                                    <a
                    href="https://github.com/hmnomaan/tourism-or-delivery-website-client-side-assignment11"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 ><i className="fab fa-github text-black  me-1 fs-6  "></i>Client-Side</h5>
                  </a>
                  <a
                    href="https://github.com/hmnomaan/tourism-or-delivery-website-server-side-assignment11"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 ><i className="fab fa-github text-black me-1 fs-6  "></i>Server-Side</h5>
                  </a>
                  </div>
                  <Link to='/tourinchina'> <button className="btn bg-primary text-white px-5">View Details</button></Link>  </Card.Body>
            </Card>
          </Col>
          <Col>
           <Card data-aos="fade-up"
     data-aos-duration="3000"className="project-container bg-light">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={nnbhealthCareProject3}
                    alt=""
                     className=" img-fluid zoom"
                    />
                    <p className="text-black mt-2"><strong>NNB-HeathCare</strong> - A Hospital Management Website</p>
                    <small className="text-justify d-flex justify-content-between  text-black  ">

                      ● A Responsive Frontend Website with JSON Data
                      ● User can register, login with email and password
                      
● Hospital website where user can also login with google
● Showed the services provided by the hospital
● Users can login to contact Specialist Doctors
</small>
                </Card.Text>
                
                  <div className="d-flex justify-content-around">
                  <small className="rounded px-1 text-white bg-info">html5</small>
                  <small className="rounded px-1 text-white bg-warning">css3</small>
                  <small className="rounded px-1 text-white bg-primary">react</small>
                  <small className="rounded px-1 text-white bg-success">bootstrap</small>
                  </div>
                <div className="d-flex justify-content-around mt-2">
                  <a
                    href="https://nurun-nahar-begum-health-care.web.app/"
                    target="_blank" rel="noopener noreferrer"  
                  >
                    <h5 ><i class="fas fa-globe text-black  me-1 fs-6 "></i>Live-Site</h5>
                                    </a>
                                    <a
                    href="https://github.com/hmnomaan/healthcare-related-website-assignment10"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 ><i className="fab fa-github text-black  me-1 fs-6  "></i>Client-Side</h5>
                  </a>
                  
                  </div>
                  <Link to='/nnb-healthcare'> <button className="btn bg-primary text-white px-5">View Details</button></Link>   </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
    );
};

export default Projects;

