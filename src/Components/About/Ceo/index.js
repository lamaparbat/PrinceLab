import React from 'react';
import '../Ceo/index.css';

function index() {
 //custom dot component
 const Dot = () => {
  return (
   <div className='dot 1mx-2'></div>
  )
 }

 return (
  <div className='container my-5 ceo'>
   <img
    id='ceo_img'
    src={process.env.PUBLIC_URL + "/assets/ceo.png"}
    loading='lazy'
   />
   <div className='ceo_content'>
    <h1>Prince Kumar Singh</h1>
    <p>CEO/FOUNDER</p>
    <h4>
     <img
      src={process.env.PUBLIC_URL + "/assets/quote1.png"}
      loading="lazy"
      id='ceo_content_img1'
     />
     We are never going to compromise our
     company goals and values at any cost.
     <img
      src={process.env.PUBLIC_URL + "/assets/quote2.png"}
      loading="lazy"
      id='ceo_content_img2'
     />
    </h4>
    <center>
     <div className='quotes pb-2 pt-3'>
      <span><Dot />We push our boundaries everyday </span><br />
      <span><Dot />Respect talent and creativity </span><br />
      <span><Dot />Always think different</span><br />
     </div>
    </center>
   </div>
  </div>
 );
}

export default index;
