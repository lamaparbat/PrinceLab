import React from 'react';
import '../Languages/index.css';

function index() {
  return (
    <>
      <div className='container-fluid languages'>
        <center>
          <h1 id='title'>Languages we ought to simplify</h1>
        </center><br />
        <div className='icon_container'>
          <img
            src={process.env.PUBLIC_URL + "/assets/python.png"}
            className='img-fluid' id='icon'
            loading='lazy'
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/tensorflow.png"}
            className='img-fluid' id='icon'
            loading='lazy'
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/flutter.png"}
            className='img-fluid' id='icon'
            loading='lazy'
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/arduino.png"}
            className='img-fluid'
            id='icon'
            loading='lazy'
          />
        </div>
      </div>
    </>
  );
}

export default index;
