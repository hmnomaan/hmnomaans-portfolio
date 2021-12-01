import React from 'react';
import './SubmitSuccess.css'
import {Link} from 'react-router-dom'
const SubmitSuccess = () => {
    return (
        <div className="submit-success  ">
            
            <small className="text-success mt-5">Submit Success!!!</small>
            <h2>Thanks For Messaging Me! Please wait, I will reply Soon</h2>
      <Link to="/">
        <button className="btn btn-primary mb-5">go to home</button>
      </Link>
    
        </div>
    );
};

export default SubmitSuccess;