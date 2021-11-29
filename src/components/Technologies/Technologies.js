import React from 'react';
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

const Technologies = () => {
    return (
        <div className="mt-5 container">
      <h5>skills</h5>
      <h1>Technologies</h1> <hr />
      <p>what makes me special with the creativity while coding</p>
      <div className="row bg-success">
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "120px" }}
                src={html5}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "120px" }}
                src={css3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "160px"
                                   
                                ,
                                 borderRadius: "100%"
                                }}
                src={javascript}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "170px"
                                  ,
                                 borderRadius: "100p%"}
                                }
                src={bootstrap}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "160px"
                                  ,
                                 borderRadius: "100%"}}
                src={git}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "90px" }}
                src={mongodb}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "180px"
                                    ,
                                borderRadius:"100%"}}
                src={express}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "100px" }}
                src={react}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "150px"
                  ,
                                 borderRadius: "100%"                }}
                src={node}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "120px" }}
                src={github}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "150px"
                , borderRadius:"100%"                }}
                src={trello}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                style={{ width: "100px" }}
                src={awsLamda}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-4">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img
                                style={{
                                    width: "150px"
                                  ,
                                 borderRadius: "100%"}}
                src={heroku}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  mt-3 mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img 
                                style={{
                                    width: "100px"
                  ,
                                 borderRadius: "100%"                }}
                src={firebase}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Technologies;