import React from 'react';
import '../Beta/index.css';

function index() {
 return <div className='container-fluid beta'>
  <h1 id='title'>Upcoming Event</h1>
  <h5 id='sub_title'>version release</h5><br/><br/>
  <div className='counter_div'>
   <div className='count1 d-flex flex-column'>
    10
    <span className="h6 text-white">Day</span>
   </div>
   <div className='count2 d-flex flex-column'>
    09
    <span className="h6 text-white">Month</span>
   </div>
   <div className='count3 d-flex flex-column'>
    22
    <span className="h6 text-white">Year</span>
   </div>
  </div>
 </div>;
}

export default index;
