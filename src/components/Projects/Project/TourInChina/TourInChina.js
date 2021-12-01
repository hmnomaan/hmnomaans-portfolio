import React from 'react';
import {Link} from 'react-router-dom'
import { Card, Col } from 'react-bootstrap';
import '../../Project/Project.css'

import WatchPlanetProject1 from '../../../../assets/projects/watch-planet.png'
const TourInChina = () => {
    return (
        <div>
            <div className="projectDetails">
             <Col>
            <Card className="project-container bg-light">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={WatchPlanetProject1}
                    alt="" width="350px" height="300px"
                    className="img-fluid"
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
                  <Link to='/'><button className="btn bg-primary text-white px-5">Back To Home</button></Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
        </div>
    );
};

export default TourInChina;