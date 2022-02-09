import React from 'react';
import '../Signup/index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';


function index() {
 // custom toggle btn
 const ToggleBtn = () => {
  return (
   <label class="switch">
    <input type="checkbox" />
    <span class="slider round"></span>
   </label>
  )
 }

 return (
  <div className='container-fluid login'>
   <div className='box'>
    <img
     id='login_img'
     src={process.env.PUBLIC_URL + "/assets/soil.png"} alt="" />
    <div className='content px-5 pt-3'>
     <h1 className='title fw-bold'>Sign Up</h1><br />
     {/* username or email feild */}
     <div className='username_inp'>
      <AccountCircleIcon id="icon" />
      <input type="text" placeholder='Username' />
     </div>
     {/* password feild */}
     <div className='password_inp'>
      <VpnKeyIcon id="icon" />
      <input type="text" placeholder='Password' />
      <VisibilityOffIcon id="icon" className='mx-1' />
     </div>
     {/* save password */}
     <div className='save_info'>
      <div className='save_pw'>
       <ToggleBtn />
       <span className='mx-3'>Remember Password</span>
      </div>
      <a href='#'>Forget password ?</a>
     </div>
     <button className='btn login_btn w-100'>SIGN-IN</button>
     {/* form footer */}
     <div className='form_footer py-3'>
      <span className='text-secondary'>New to the website ?</span>
      <a href="#" >Signup Up Now</a>
     </div>
     {/* divider */}
     <div className='divider'></div>
     <span className='text-secondary' id='or'>OR</span>

     {/* social media icons */}
     <center id="icon_title">
      <span className='text-secondary'>Sign Up using</span>
     </center>
     <div className='icons'>
      <img
       src={process.env.PUBLIC_URL + "/assets/facebook.png"} />
      <div id='google'>
       <img
        src={process.env.PUBLIC_URL + "/assets/google.png"} />
      </div>
      <div id='apple'>
       <AppleIcon id="apple_icon" />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default index
