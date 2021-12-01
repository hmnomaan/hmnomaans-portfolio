import React from 'react';
import'./Services.css'
import { Card, Col, Row } from "react-bootstrap";
import mernStack from '../../assets/Expertise-Image/mernStack-1.jpg'
import responsiveDesign from '../../assets/Expertise-Image/responsiveDesign-2.png'
import frontend from '../../assets/Expertise-Image/frontend-3.png'
 import backendDev from '../../assets/Expertise-Image/Backenddev-4.jpg'
import webDesign from '../../assets/Expertise-Image/webDesign-5.jpg'
import DataBaseDesign from '../../assets/Expertise-Image/DataBaseDesign-6.jpg'
import cloudHosting from '../../assets/Expertise-Image/cloudHosting-7.jpg'
 import SoftwareArchitechture from '../../assets/Expertise-Image/SoftwareArchitechture-8.png'
import systemDesign from '../../assets/Expertise-Image/sysDesign-9.png'
import fullstackDev from '../../assets/Expertise-Image/fullstackDev-10.jpeg'
import BugFixing from '../../assets/Expertise-Image/testingBugFix-12.jpg'
// import TourInChinaProject2 from '../../assets/tourinchina.png'
// import nnbhealthCareProject3 from '../../assets/nnb-healthCare.png'
const Services = () => {
    return (
         <div className="expertise projects-container">
      <div className="container mt-5 mb-5">
   {/* <h5 className="mt-5"></h5> */}
        <h1 className="text-black mt-5">Expertise</h1>
        <p className="text-dark">value I add in the IT industry.</p>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="project-container bg-light  " >
              <Card.Body>
                <Card.Text className="" >
                    <div className=""><img
                     width="150px" height="70px"
                    src={mernStack}
                    alt=""
                    
                  /></div> 
                </Card.Text>
                <div className="d-flex justify-content-around">
                  
                </div>
                <div className="d-flex justify-content-around">
                 
                  <p className="text-dark">MERN Stack</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                    <img width="150px" height="70px"
                      
                    src={responsiveDesign}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Responsive Design</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={frontend}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Frontend Development</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={backendDev}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Backend Development</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={webDesign}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Web Design</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={DataBaseDesign}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Data Base Design</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={cloudHosting}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Cloud Hosting</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={SoftwareArchitechture}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Software Architechture</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={systemDesign}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">System Design</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={fullstackDev}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Full Stack Development</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-container bg-light ">
              <Card.Body>
                <Card.Text className="">
                  <img width="150px" height="70px"
                    src={BugFixing}
                    alt=""
                    className="img-fluid"
                  />
                </Card.Text>
                <div className="d-flex justify-content-around">
                  <p className="text-dark">Bug Fixing</p>
                </div>
                <div className="d-flex justify-content-around">
                  
                 
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