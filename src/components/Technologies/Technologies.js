import React from 'react';
import './Technologies.css'
import html5 from '../../assets/skillset/html5.png'
import css3 from '../../assets/skillset/css3.png'
import javascript from '../../assets/skillset/javascript.png'
import bootstrap from '../../assets/skillset/bootstrap.jpg'
import git from '../../assets/skillset/git.png'
import mongodb from '../../assets/skillset/mongodb.png'
import express from '../../assets/skillset/express-logo.png'
import react from '../../assets/skillset/reactjs.png'
import node from '../../assets/skillset/nodejs.png'
import github from '../../assets/skillset/GitHub-logo.png'
import trello from '../../assets/skillset/trello.png'
import awsLamda from '../../assets/skillset/aws-lamda.png'
import heroku from '../../assets/skillset/heroku.png'
import firebase from '../../assets/skillset/firebase.png'
import { Card } from 'react-bootstrap';

const Technologies = () => {
    return (
        <div className="technologies container">
      
      <h1 className="text-black ">Technologies</h1> 
      <p>what makes me special with the creativity while coding</p>
      <div className="row mt-3 container">
        <div className="col-md-2  col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
               <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="HTML5"><h2 className="text-white"><img width="130px" height="70px" src={html5} alt="" /> </h2>
                <p className="text-white">HTML5</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
             <div >
               <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="CSS3"><h2 className="text-white"><img width="130px" height="70px" src={css3} alt="" /> </h2>
                 <p className="text-white">CSS3</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
            <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="JavaScript"><h2 className="text-white"><img width="130px" height="70px" src={javascript} alt="" /></h2><p className="text-black"> JavaScript</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="Bootstrap"><h2 className="text-white border-5"><img width="130px" height="70px" src={bootstrap} alt="" /> </h2><p className="text-black">Bootstrap </p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="Git"><h2 className="text-white"><img width="130px" height="70px" src={git} alt="" /> </h2><p className="text-black"> Git</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="MongoDB"><h2 className="text-white"><img width="130px" height="70px" src={mongodb} alt="" /></h2><p className="text-black">MongoDB</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="ExpressJs"><h2 className="text-white"><img width="130px" height="70px" src={express} alt="" /> </h2><p className="text-black">ExpressJs</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="ReactJs"><h2 className="text-white"><img width="130px" height="70px" src={react} alt="" /></h2><p className="text-black">ReactJs</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="NodeJs"><h2 className="text-white"><img width="130px" height="70px" src={node} alt="" /> </h2><p className="text-black">NodeJs</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="GitHub"><h2 className="text-white"><img width="130px" height="70px" src={github} alt="" /> </h2><p className="text-black">GitHub</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="Trello"><h2 className="text-white"><img width="130px" height="70px" src={trello} alt="" /> </h2><p className="text-black">Trello</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
            <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="AWS Lamda"><h2 className="text-white"><img width="130px" height="70px" src={awsLamda} alt="" /> </h2><p className="text-black">AWS Lamda</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-4">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4 " title="Heroku"><h2 className="text-white"><img width="130px" height="60px" src={heroku} alt="" /></h2><p className="text-black">Heroku</p></Card>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6  mt-3 mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
             <Card data-aos="fade-up"
     data-aos-duration="3000"className="card-hover bg-white p-4" title="Firebase"><h2 className="text-white"><img width="130px" height="70px" src={firebase} alt="" /> </h2><p className="text-black">Firebase</p></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Technologies;