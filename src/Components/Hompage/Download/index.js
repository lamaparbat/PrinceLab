import React from 'react';
import '../Download/index.css';

function index() {
  return (
   <div className='container Download '>
    <div className="rows">
     <h1>Downloads</h1>
     <p>Download the latest versions of our software for the available software.
      More operating systems will be added soon.</p>
     <div className='d-flex'>
      <img src={process.env.PUBLIC_URL + "/assets/mac.png"} />
      <img src={process.env.PUBLIC_URL + "/assets/windows.svg"} />
     </div>
     <button className='btn btn-success'>Download</button>
    </div>
    </div>
  )
}

export default index
