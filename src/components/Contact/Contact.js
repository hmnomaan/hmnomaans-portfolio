import React from "react";
import contact from "../../assets/contact.png";
// import "./contact.css";
// import "animate.css";
const Contact = () => {
  return (
    <div style={{ marginTop: "7rem" }}>
      <h5>contact</h5>
      <h1>Contact Me</h1>
      <p>send your message.i will reply you very soon</p>
      <div className="row container mt-5 align-items-center mx-auto">
        <div className="col-md-6 animate__fadeInLeft">
          <img src={contact} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 form-container animate__animated animate__bounce ">
          <form
            action="https://formsubmit.co/hmnomaan@gmail.com"
            method="POST"
          >
                      <div className="ms-auto">
                          <p>Name:<input
                          className="px-5 mt-2 "
              placeholder="enter your name"
              type="text"
              name="name"
              required
            /></p> <br />
            <p>emial:<input className="px-5  mt-2"
              placeholder="enter your email"
              type="email"
              name="email"
              required
            /> </p><br />
            <p>Phone:<input className="px-5 mt-2"
              type="text"
              name="phone"
              placeholder="enter your number"
              required
            /></p> <br />
            <input className="px-5 mt-2"
              type="hidden"
              name="_next"
              value="https://hmnomaan.netlify.app/submit/success"
            /> 
           <p> Message: <textarea className="px-5 mt-2 "
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            /></p>
                      </div>
           <h5 className="ms-5 mb-5" style={{backgroundColor:"transparent"}}><button  type="submit" className="mx-5 ms-auto download_btn  ">
              Send Message
            </button></h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
