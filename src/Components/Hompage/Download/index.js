import React from 'react';
import '../Download/index.css';

function index() {
  return (
    <div className='container Download '>
      <div className="rows mt-3">
        <div className='mb-4 title'>
          <h1><b>Downloads</b></h1>
          <img
            className='input_icon'
            src={process.env.PUBLIC_URL + "/assets/download.svg"}
            loading='lazy'
          />
        </div>
        <p className='mb-4'>Download the latest versions of our software for the available software.
          More operating systems will be added soon.</p>
        <div className='d-flex mb-5'>
          <div className='img_container'>
            <img
              src={process.env.PUBLIC_URL + "/assets/mac.png"}
              loading='lazy'
            />
          </div>
          <div className='img_container'>
            <img
              src={process.env.PUBLIC_URL + "/assets/windows.svg"}
              id="win_icon"
              loading='lazy'
            /></div>
        </div>
        <button className='btn text-light'>Download</button>
      </div>
    </div>
  )
}

export default index
