import React from 'react';
import '../Explore/index.css';

function index() {
 // explore textual content component
 const Content = ({src,title, desc,id}) => {
  return (
   <div className='explore_box1_content py-2 px-3'>
    <div className='d-flex '>
     <img
      id={id}
      className='mt-3'
      src={src}
     />
     <div className='pt-2 px-2'>
      <h5>{title}</h5>
      <span>{desc}</span>
     </div>
    </div>
    {
     id === "img1" ? <button className='btn btn-primary py-1 px-3'>Download</button>:null
    }
   </div>
  )
 }

 return (
  <div className='container explore'>
   <h2 className='pb-3 px-2'>Explore the world</h2>
   <div className='explore_row'>
    <div className='explore_box1'>
     <Content
      src={process.env.PUBLIC_URL+"/assets/earth.png"}
      title="Google Earth"
      desc="Explore the world"
      id="img1"
     />
    </div>
    <div className='explore_box2'>
     <Content
      src={process.env.PUBLIC_URL + "/assets/plane.png"}
      title="World Tour"
      desc="Visit any country and make you life better"
      id="img2"
     />
    </div>
   </div>
  </div>
 )
}

export default index