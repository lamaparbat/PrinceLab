import React from 'react';
import '../Login/index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

function index() {
 
 // custom toggle switch styling
 const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
   borderRadius: 22 / 2,
   '&:before, &:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 16,
    height: 16,
   },
   '&:before': {
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
     theme.palette.getContrastText(theme.palette.primary.main),
    )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
    left: 12,
   },
   '&:after': {
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
     theme.palette.getContrastText(theme.palette.primary.main),
    )}" d="M19,13H5V11H19V13Z" /></svg>')`,
    right: 12,
   },
  },
  '& .MuiSwitch-thumb': {
   boxShadow: 'none',
   width: 16,
   height: 16,
   margin: 2,
  },
 }));
 
 
 return (
  <div className='container-fluid login'>
   <div className='box'>
    <img 
     id='login_img'
     src={process.env.PUBLIC_URL + "/assets/signin.png"} alt="" />
    <div className='content px-5'>
     <h1 className='text-primary fw-bold'>Sign in</h1><br />
     {/* username or email feild */}
     <div className='username_inp'>
      <AccountCircleIcon id="icon" />
      <input type="text" placeholder='Username' />
     </div>
     {/* password feild */}
     <div className='password_inp'>
      <VpnKeyIcon id="icon" />
      <input type="text" placeholder='Password' />
      <VisibilityOffIcon id="icon" />
     </div>
     {/* save password */}
     <div className='save_info'>
      <FormControlLabel
       control={<Android12Switch defaultChecked />}
       label="Remember me"
      />
      <a href='#'>Forget password ?</a>
     </div>
     <button className='btn btn-primary py-2 w-100'>SIGN-IN</button>
     {/* form footer */}
     <div className='form_footer py-3'>
      <a href="#" className='text-dark'>New to the website ?</a>
      <a href="#">Signup Up Now</a>
     </div>
     {/* divider */}
     <div className='divider'></div>
     <span id='or'>OR</span>
     
     {/* social media icons */}
     <center id="icon_title"><span>Sign Up using</span></center>
     <div className='icons'>
      <img
       src={process.env.PUBLIC_URL + "/assets/facebook.png"} />
      <div id='google'>
       <img
        src={process.env.PUBLIC_URL + "/assets/google.png"} />
      </div>
      <div id='apple'>
       <img
        src={process.env.PUBLIC_URL + "/assets/apple.png"} />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default index
