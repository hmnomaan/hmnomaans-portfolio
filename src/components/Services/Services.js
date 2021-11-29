import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import WatchPlanetProject1 from '../../assets/watch-planet.png'
import TourInChinaProject2 from '../../assets/tourinchina.png'
import nnbhealthCareProject3 from '../../assets/nnb-healthCare.png'
const Services = () => {
    return (
         <div className="projects-container">
      <div className="container mt-5 mb-5">
   <h5 className="mt-5">promise-to-work</h5>
        <h1>Services</h1><hr />
        <p>what I offer is actually matter in the IT industry.</p>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="project-container">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={WatchPlanetProject1}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <h5>mongodb</h5>
                  <h5>express</h5>
                  <h5>react</h5>
                  <h5>nodejs</h5>
                </div>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://watch-planet.netlify.app"
                    target="_blank" rel="noopener noreferrer"  
                  >
                    <h5 style={{ background: "#081158" }}>Live-Site</h5>
                                    </a>
                                    <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Client-Side</h5>
                  </a>
                  <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Server-Side</h5>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={TourInChinaProject2}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <h5>mongodb</h5>
                  <h5>express</h5>
                  <h5>react</h5>
                  <h5>nodejs</h5>
                </div>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://tourinchina.netlify.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Live-Site</h5>
                                    </a>
                                    <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Client-Side</h5>
                  </a>
                  <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Server-Side</h5>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container">
              <Card.Body>
                <Card.Text className="">
                  <img
                    src={nnbhealthCareProject3}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <h5>mongodb</h5>
                  <h5>express</h5>
                  <h5>react</h5>
                  <h5>nodejs</h5>
                </div>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://nurun-nahar-begum-health-care.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>view</h5>
                  </a>
                  <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Client-Side</h5>
                  </a>
                  <a
                    href="https://watch-gallery-fbc87.web.app/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    <h5 style={{ background: "#081158" }}>Server-Side</h5>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    );
};

export default Services;