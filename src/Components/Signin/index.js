import React from 'react';
import '../Signin/index.css';

function index() {
  return (
    <div className='container signin'>
    <div className='signin_row bg-whitesmoke'>
     <img src={process.env.PUBLIC_URL + "/assets/signin.png"} />
     <div className='form pt-4 d-flex flex-column'>
      <h4>Signin Form</h4>
      <input type="email" placeholder='Username' id='username' />
      <input type="password" placeholder='Username' id='username' />

     </div>
    </div>
    </div>
  )
}

export default index
