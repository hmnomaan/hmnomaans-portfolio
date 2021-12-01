import React from 'react';
import react from '../../assets/skillset/blogs-Image/blog-1.jpg'
import './Blogs.css'

import reactVue from '../../assets/myBlog/ReactVsVue2.jpg'
import flutterReact from '../../assets/myBlog/react-vs-flutter.png'
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        // <div>
        //     <h2>This is Blogs What is connects IT community</h2>
        // </div>
        <div className="myblogs container">
      
      <h1 className="text-black">MyBlog</h1> 
      <p>my Blogs are connecting IT communities.check this out.</p>
      <div className="row ">
        <div className="col-md-4 col-sm-12 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
            <Card data-aos="flip-right"className="bg-white p-4" ><h2 className="text-white"><img width="300px" height="250px" src={react} alt="" /> </h2>
                <p className="text-black">Today's Blog: 'Will Reactjs go in the long run? What Experts say?</p><div className="d-flex justify-content-between mx-5"><small><strong>By</strong><span className="text-primary mx-1">Jhanker Mahbub</span></small> <a href="https://www.c-sharpcorner.com/article/what-and-why-reactjs/" className=" text-decoration-none ms-auto mb-3 " target="_blank" rel="noopener noreferrer"><button className="text-dark text-muted btn bg-primary p-0"><span className="text-white">Read Now</span></button></a> </div> </Card>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mt-3">
          <div className="d-flex align-items-center justify-content-center">
            <div>
            <Card data-aos="flip-right"className="bg-white p-4" ><h2 className="text-white"><img width="300px" height="250px" src={reactVue} alt="" /> </h2>
                <p className="text-black">Today's Blog: 'The future of front-end development – React vs Vue js'</p><div className="d-flex justify-content-between mx-5"><small><strong>By</strong><span className="text-primary mx-1">Jhanker Mahbub</span></small> <a href="https://cubettech.com/resources/blog/the-future-of-front-end-development-react-vs-vue-js/" className=" text-decoration-none ms-auto  mb-3" target="_blank" rel="noopener noreferrer"><button className="text-dark text-muted btn bg-primary p-0"><span className="text-white">Read Now</span></button></a> </div> </Card>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mt-3 ">
          <div className="d-flex align-items-center justify-content-center">
            <div>
            <Card data-aos="flip-right"className="bg-white p-4" ><h2 className="text-white"><img width="300px" height="250px" src={flutterReact} alt="" /> </h2>
                <p className="text-black">Today's Blog: 'Flutter vs. React Native – What to Choose in 2021?'</p><div className="d-flex justify-content-between mx-5"><small><strong>By</strong><span className="text-primary mx-1">Jhanker Mahbub</span></small> <a href="https://www.thedroidsonroids.com/blog/flutter-vs-react-native-what-to-choose-in-2021" className=" text-decoration-none ms-auto mb-3" target="_blank" rel="noopener noreferrer"><button className="text-dark text-muted btn bg-primary p-0"><span className="text-white">Read Now</span></button></a> </div> </Card>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    );
};

export default Blogs;