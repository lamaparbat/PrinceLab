import React from 'react';
import '../Services/index.css';

// services card
const Card = (props) => {
 return (
  <>
   <div className='card'>
    <img
     src={props.src}
    />
    <div className='card-body text-center'>
     <span className='card-title'>{props.title}</span>
    </div>
   </div>
 </>)
}

function index() {
  return (
    <div className='container-fluid services'>
    {/* row1 -> short description */}
      <div className="services_rows">
     <div className='content pt-2'>
      <h1><b><span className='text-danger'>M</span>ake your work <span className='text-danger'>M</span>ore easier</b></h1>
      <p>Choose your preferred app, AI app, extensions and block to get your work done faster
       and easier. App Store lets you download the app and use it for every personal use, AI store
       have all the apps that are powered/uses AI to run their app, Extensions have all the
       necessary extension to be used and the block contains all the pre-defined custom code
       block uploaded by the developers that can be used in your program. </p>
      <a href="#"
       className='btn btn-dark py-1 px-4 mt-1 text-whitesmoke'>
       Visit our store
      </a>
     </div>
     <img src={process.env.PUBLIC_URL + "/assets/service.jpg"} loading='lazy' />
    </div>
    {/* rows2 -> services cards */}
      <div className='container d-flex justify-content-center'>
        <div className='card_rows'>
          <Card src={process.env.PUBLIC_URL + "/assets/media.png"} title="Applications" />
          <Card src={process.env.PUBLIC_URL + "/assets/ai.jpeg"} title="Artificial Intelligence" />
          <Card src={process.env.PUBLIC_URL + "/assets/extension.jpeg"} title="Extension" />
          <Card src={process.env.PUBLIC_URL + "/assets/authentication.jpeg"} title="Block" />
        </div>
      </div>
    </div>
  )
}

export default index
