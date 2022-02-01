import React from 'react';
import '../BlockCodeCardImg/index.css';

function index() {
 return (
  <div className='container card_container'>
   <div className='row'>
       <img
         src={process.env.PUBLIC_URL + "/assets/block_img1.svg"}
         loading='lazy'
       />
       <img
         src={process.env.PUBLIC_URL + "/assets/block_img2.svg"}
         loading='lazy'
       />
   </div>
  </div>
);
}

export default index;
