import React from 'react';
import '../Explore/index.css';

function index({ bg_src1, bg_src2,heading, src1, title1, desc1, id1, src2, title2, desc2, id2 }) {
 return (
  <div className='container explore px-21'>
   <h2 className='pb-3 px-2'>{heading}</h2>
   <div className='explore_row'>
    <div className='explore_box1' style={{ background: `url(${bg_src1})`, backgroundSize:"100% 100%" }}>
     <div className='explore_box1_content py-2 px-3'>
      <div className='d-flex '>
       <img
        id={id1}
        className='mt-3'
        src={src1}
       />
       <div className='pt-2 px-2'>
        <h5>{title1}</h5>
        <span>{desc1}</span>
       </div>
      </div>
      {
       id1 === "img1" ? <button className='btn btn-primary py-1 px-3'>Download</button> : null
      }
     </div>
    </div>
    <div className='explore_box2' style={{ background: `url(${bg_src2})`, backgroundSize: "100% 100%" }}>
     <div className='explore_box1_content py-2 px-3'>
      <div className='d-flex '>
       <img
        id={id2}
        className='mt-3'
        src={src2}
       />
       <div className='pt-2 px-2'>
        <h5>{title2}</h5>
        <span>{desc2}</span>
       </div>
      </div>
      {
       id2 === "img1" ? <button className='btn btn-primary py-1 px-3'>Download</button> : null
      }
     </div>
    </div>
   </div>
  </div>
 )
}

export default index