import React from 'react';
import '../Beta/index.css';

function index() {
 return <div className='container-fluid beta'>
  <h1 id='title'>Upcoming Event</h1>
  <h5 id='sub_title'>version release</h5><br/>
  <div className='counter_div'>
   <div className='count1 d-flex flex-column'>
    12
    <span className="h3 text-white">Days</span>
   </div>
   <div className='count2 d-flex flex-column'>
    09
    <span className="h3 text-white">Hours</span>
   </div>
   <div className='count3 d-flex flex-column'>
    22
    <span className="h3 text-white">Minutes</span>
   </div>
  </div>
 </div>;
}

export default index;
