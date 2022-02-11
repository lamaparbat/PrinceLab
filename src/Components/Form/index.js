import React,{useState, useEffect} from 'react';
import '../Form/index.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

function Index({ type }) {
  // store the form_type state
  const [form_type, setForm_type] = useState(true);
  
  //update the form type -> signup or login
  useEffect(() => {
    setForm_type(type);
  }, [])
  
  // custom toggle btn
  const ToggleBtn = () => {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    )
  }

  //custom save password component
  const SavePassword = () => {
    return (
      <div className='save_info'>
        <div className='save_pw'>
          <ToggleBtn />
          <span id='remem_span' className='mx-3'>Remember Password</span>
        </div>
        <a href='#'>Forget password ?</a>
      </div>
    )
  }

  // custom agree terms and condition component
  const AgreeTerms = () => {
    return (
      <div className='agree_terms'>
          <input type="checkbox" className="checkbox" />
          <span className='mx-3 text-secondary'>Agree Terms and Condtion</span>
      </div>
   )
  }
  
  // login btn clicked event
  const login = () => {
    console.log("login btn clicked !!");
  }
  
  // login btn clicked event
  const signup = () => {
    console.log("signup btn clicked !!");
  }

  return (
    <div className='container-fluid form'>
      <div className='box'>
        <img
          id='form_img'
          src={process.env.PUBLIC_URL + "/assets/signin.png"} alt="" />
        <div className='content px-5 pt-3'>
          <h1 className='title fw-bold'>Sign in</h1><br />

          {/* username or email feild */}
          <div className='username_inp px-3'>
            <AccountCircleIcon id="icon" />
            <input
              className='py-3 px-2'
              type="text"
              placeholder='Username' />
          </div>

          {/* email for signup */}
          {
            form_type === "signup" ?
              <div className='username_inp px-3'>
                <MailOutlineRoundedIcon id="icon" />
                <input
                  className='py-3 px-2'
                  type="email"
                  placeholder='Email' />
              </div> : null
          }


          {/* password feild */}
          <div className='password_inp px-3'>
            <VpnKeyIcon id="icon" />
            <input
              className='py-3 px-2'
              type="password"
              placeholder='Password' />
            <VisibilityOffIcon id="icon" className='mx-1' />
          </div>

          {/* repassword for signup */}
          {
            form_type === "signup" ?
              <div className='password_inp px-3'>
                <VpnKeyIcon id="icon" />
                <input
                  className='py-3 px-2'
                  type="password"
                  placeholder='Confirm password' />
                <VisibilityOffIcon id="icon" className='mx-1' />
              </div> : null
          }

          {/* save password on login or agree on signup  */}
          {
            form_type != "signup" ? <SavePassword /> : <AgreeTerms />
          }

          {/* login or signup btn clicked */}
          {
            form_type != "signup" ?
              <button className='btn form_btn w-100' onClick={login}>
                SIGN-IN
              </button> :
              <button className='btn form_btn w-100' onClick={signup}>
                SIGN-UP
              </button>
          }

          {/* form footer for login & signup */}
          {
            form_type != "signup" ?
              <div className='form_footer py-3'>
                <span className='text-secondary'>New to the website ?</span>
                <a href="#" >Signup Up Now</a>
              </div> :
              <div className='form_footer py-3'>
                <span className='text-secondary'>Already have an account ?</span>
                <a href="#" >Log in</a>
              </div>
          }

          {/* divider */}
          <div className='divider'></div>
          <span className='text-secondary' id='or'>OR</span>

          {/* social media icons */}
          <center id="icon_title">
            <span className='text-secondary'>Sign Up using</span>
          </center>
          <div className='icons'>
            <img
              id='fb_icons'
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

export default Index
