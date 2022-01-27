import React from 'react';
import '../Guide/index.css';

function index() {
 return (
  <div className='container guide'>
   <div className="guide_rows mt-3">
    <div className='mb-5 title'>
     <img className='input_icon' src={process.env.PUBLIC_URL+"/assets/input.svg"} />
     <h1><b>Quick Guide</b></h1>
     <img className='output_icon' src={process.env.PUBLIC_URL + "/assets/output.svg"} />
    </div>
    <p className='mb-4'>To learn how to use paradox, we have some quick guide for you to get started.
     And for more advanced and developer focused guides we have provided
     some sample videos and documentation. </p>
    <p>Learn how to use the software and take the advantage of
     the powerful parallel computing. </p><br/>
    <button className='btn text-light'>Get started</button>
   </div>
  </div>
 )
}

export default index
