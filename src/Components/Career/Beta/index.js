import React from 'react';
import '../Beta/index.css';

function index() {
 return <div className='container-fluid bg-danger beta'>
  <h1 id='title'>Paradox beta</h1>
  <h5 id='sub_title'>version release</h5>
  <div className='counter_div'>
   <div className='count1'>10</div>
   <div className='count2'>20</div>
   <div className='count3'>30</div>
  </div>
 </div>;
}

export default index;
