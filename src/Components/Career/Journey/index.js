import React from 'react';
import '../Journey/index.css';

function index() {
 return <div className='container-fluid p-0 pb-3 journey'>
  <div className='journey_row'>
   <div className='leftBar'>
    <div className="leftBar_btm"></div>
   </div>
   <div className='content d-flex flex-column'>
    <h1 id='on'>ON</h1>
    <h1 id='step'>STEP</h1>
   </div>
  </div>
  <div className='rightBar'>
   <h1 id='your'>Your</h1>
   <h1 id='journey'>Journey</h1>
  </div>
  <img
   id='journey_step_img'
   src={process.env.PUBLIC_URL + "/assets/step.png"} />
 </div>;
}

export default index;
