import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../Footer/index.css';

function Index() {
 // hide the footer when form comp rendered
 const cur_route = useLocation().pathname;

 // create instance to push new route
 const navigate = useNavigate()

 //render component of link clicked
 const redirect = (route) => {
  window.location.assign(route)
 }


 return (
  <div
      className={'container-fluid footer d-' +
          (cur_route != "/Login" &&
          cur_route != "/Signup" &&
          cur_route != "/QuickGuide"? "flex":"none")} >
   <div className='footer_row'>
    <div className='service_col'>
     <h5><b>Services</b><hr className='separator w-50'/></h5>
     <a href='#'>Paradox</a>
     <a href='#'>Download</a>
     <a href='#'>Pricing</a>
    </div>
    <div className='info_col'>
     <h5><b>Information</b><hr className='separator w-50' /></h5>
     <a href='#'>Setup Guide</a>
     <a href='#'>Features</a>
     <a href='#'>Tutorial</a>
     <a href='#'>Discord</a>
    </div>
    <div className='company_col'>
     <h5><b>Company</b><hr className='separator w-50' /></h5>
     <a onClick={ () => redirect("Career")}>Career</a>
     <a onClick={ () => redirect("About")}>About Us</a>
     <a onClick={ () => redirect("Policy")}>Private Policy</a>
     <a onClick={ () => redirect("Terms")}>Terms & Condition</a>
    </div>
    <div className='follow_col'>
     <h5><b>Follow Us</b><hr className='separator w-25' /></h5>
     <div className='icons_cont'>
      <div onClick={() => redirect("https://www.facebook.com/people/Prince-Lab/100070712031228/")}>
       <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/fb.png"} />
      </div>
      <div onClick={() =>  redirect("https://twitter.com/Princelab2") }>
       <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/twitter.png"} />
      </div>
      <div onClick={() =>  redirect("https://www.instagram.com/_princelab_/")}>
       <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/insta.png"} />
      </div>
      <div onClick={() => redirect("https://www.linkedin.com/in/prince-lab-3398a7217?originalSubdomain=np")}>
       <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/linked.png"} />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Index
