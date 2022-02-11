import React from 'react';
import '../parallel/index.css';

function index() {
  return (
    <div className='container parallel p-5'>
    <img
     src={process.env.PUBLIC_URL + "/assets/parallel1.png"}
     className='img-fluid' loading='lazy' />
    <div className='roundedDiv my-5'>
     <img
      src={process.env.PUBLIC_URL + "/assets/parallel2.png"}
      loading='lazy' />
     <div className='content'>
      <h1>Parallel Computing</h1>
      <center><button className='px-3 py-1'>Data Flow</button></center>
     </div>
     <img
      src={process.env.PUBLIC_URL + "/assets/parallel3.png"}
      className='img-fluid' loading='lazy' />
    </div>
    </div>
  )
}

export default index
