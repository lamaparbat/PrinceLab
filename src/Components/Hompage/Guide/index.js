import React from 'react';
import {useNavigate} from "react-router-dom";
import '../Guide/index.css';

function Index() {
 //create instance of useNavigate
 const navigate = useNavigate();

 return (
  <div className='container guide'>
   <div className="guide_rows mt-3">
    <div className='title'>
     <img
      className='input_icon'
      src={process.env.PUBLIC_URL + "/assets/input.svg"}
      loading='lazy'
     />
     <h1><b>Quick Guide</b></h1>
     <img
      className='output_icon'
      src={process.env.PUBLIC_URL + "/assets/output.svg"}
      loading='lazy'
     />
    </div>
    <p className='mb-4'>To learn how to use paradox, we have some quick guide for you to get started.
     And for more advanced and developer focused guides we have provided
     some sample videos and documentation. Learn how to use the software and take the advantage of
     the powerful parallel computing. </p>
    <button
        className='btn text-light'
        onClick={() => navigate("/QuickGuide")}
    >Get started</button>
   </div>
  </div>
 )
}

export default Index
