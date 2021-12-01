import React from "react";
import contact from "../../assets/contact.png";
// import "./contact.css";
import "animate.css";
const Contact = () => {
  return (
    <div data-aos="fade-up"
     data-aos-duration="3000" style={{ marginTop: "7rem" }}>
      
      <h1  className="text-black mt-3">Contact Me</h1>
      <p>Get in touch. Simply Leave Your Message.</p>
      <div className="row container mt-5 align-items-center mx-auto">
        <div className="col-md-6 animate__animated animate__pulse">
          <img src={contact} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 col-sm-12 form-container animate__animated animate__bounce ">
          <form
            action="https://formsubmit.co/hmnomaan@gmail.com"
            method="POST"
          >
                      <div className="ms-auto">
                          <p>Name:<input
                          className="px-4 mt-2 "
              placeholder="enter your name"
              type="text"
              name="name"
              required
            /></p> <br />
            <p>email:<input className="px-4  mt-2"
              placeholder="enter your email"
              type="email"
              name="email"
              required
            /> </p><br />
            <p>Phone:<input className="px-4 mt-2"
              type="text"
              name="phone"
              placeholder="enter your number"
              required
            /></p> <br />
            <input className="px-4 mt-2"
              type="hidden"
              name="_next"
              value="https://hmnomaan.netlify.app/submit/success"
              />
            {/* hmnomaan.netlify.app   */}
           <p> Message: <textarea  className="px-4 mt-2 mx-sm-4 "
              name="message"
              id="message"
              cols="25"
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
