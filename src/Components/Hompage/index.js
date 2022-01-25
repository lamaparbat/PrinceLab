import React from 'react';
import '../Hompage/index.css';
import Languages from '../Hompage/Languages/index';
import BlockCodeCardImg from '../Hompage/BlockCodeCardImg/index';
import AboutEnvironment from '../Hompage/AboutEnvironment/index';
import Services from '../Hompage/Services/index';
import Premium from '../Hompage/Premium/index';
import Download from '../Hompage/Download/index';

function index() {
  return (
    <>
      <div className='container-fluid homepage'>
          <video
            className='video'
            src={process.env.PUBLIC_URL + "/assets/paradox.mp4"}
            autoPlay loop muted></video>
      </div><br /><br />

      <Languages />

      <BlockCodeCardImg />

      <AboutEnvironment />

      <Services />
      
      <Premium />
      
      <Download />
    </>);
}

export default index;
