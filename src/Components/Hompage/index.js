import React from 'react';
import '../Hompage/index.css';
import Languages from '../Hompage/Languages/index';

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
     </div><br/><br/>
     
     <Languages />
 </>);
}

export default index;
