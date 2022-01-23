import React from 'react';
import '../Hompage/index.css';

function index() {
 return(
 <>
   <div className='homepage'>
    <div className='videoContainer'>
     <video
      className='video w-100'
      src={process.env.PUBLIC_URL + "/assets/banner.mp4"}
      autoPlay loop muted></video>
    </div>
   </div>
 </>);
}

export default index;
