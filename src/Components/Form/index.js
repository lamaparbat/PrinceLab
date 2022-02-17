import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import validator from "validator";
import {passwordStrength} from 'check-password-strength';
import {auth, db} from '../../firebaseDB';
import axios from 'axios';
import '../Form/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

function Index({type}) {
    //all user data
    const [users, setUsers] = useState([]);

    //create instance of useNavigate for routing
    const navigate = useNavigate();

    // store the form_type state
    const [form_type, setForm_type] = useState(true);

    //agree to terms and conditon
    const [agreeTerms, setAgreeTerms] = useState(false);

    //save password
    const [savepw, setPw] = useState(false);

    //login data
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    //signup data
    const repassword = useRef()
    const [signupData, setSignupData] = useState({
        username: loginData.username,
        email: "",
        password: loginData.password
    });

    //fetched all the user from firebase DB
    useEffect(() => {
        db.ref(`/users`).on('value', snapshot => {
            snapshot.forEach(user => {
                setUsers(prev => [
                    ...prev,
                        user.val()
                ])
            })
        });
    }, [])

    // fill loginData to signUpData
    useEffect(() => {
        setSignupData({
            username: loginData.username,
            email: signupData.email,
            password: loginData.password
        });
    }, [loginData])

    //update the form type -> signup or login
    useEffect(() => {
        setForm_type(type);
    }, [])

    // custom toggle btn
    const ToggleBtn = () => {
        return (
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        )
    }

    //custom save password component
    const SavePassword = () => {
        return (
            <div className='save_info'>
                <div className='save_pw' onClick={() => setPw(true)}>
                    <ToggleBtn/>
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
                <input type="checkbox"
                       className="checkbox"
                       onClick={() => setAgreeTerms(true)}
                />
                <span className='mx-3 text-secondary'>I read & agree to
          <span className='text-danger'> Terms and Condtion</span>
        </span>
            </div>
        )
    }

    //redirect the component
    const redirectTo = (route) => {
        navigate(route);
    }

    // notice toast
    const notice = (type, message) => {
        if(type === "success"){
            toast.success(message);
        }else{
            toast.error(message);
        }
    }

    // login btn clicked event
    const login = () => {
        if (loginData.username !== "" && loginData.password !== "" && savepw !== false) {
            //sending data to the firebase db server
            users.forEach(user => {
                console.log((user.username == loginData.username) && ( user.password == loginData.password))
                if((user.username === loginData.username) && ( user.password === loginData.password)){
                    notice("success", "Login successfully")
                   setTimeout(() => {
                       navigate("/")
                   },1000)

                    return true;
                }
            })
            notice("failed", "Wrong email or password")
        } else {
            alert("Please fill the all field value !!")
        }
    }

    //check password strength
    const checkPasswordStrength = (pw) => {
        // strong pw =  A@2asdF2020!!*
        //weak pw = asdf1234
        //too weak = asdfasdf
        if (passwordStrength(pw).value !== "Too weak") {
            //sending data to the firebase db server
            axios.post("https://princelab-b263f-default-rtdb.firebaseio.com/users.json", signupData)
                .then(res => {
                    console.log(res)
                    notice("success","Registration successfull");

                    //reset login data
                    setLoginData({
                        username: "",
                        password: "",
                    });

                    setTimeout(() => {
                        navigate("/Login")
                    },2000)
                })
                .catch(err => {
                    notice("success","Registration Failed");
                    console.log(err.message)
                })
        } else {
            alert(passwordStrength(pw).value)
        }
    }

    // login btn clicked event
    const signup = () => {
        if (signupData.username !== "" && agreeTerms !== false && signupData.email !== "" && signupData.password !== "" && signupData.repassword !== "") {
            validator.isEmail(signupData.email) ?
                (signupData.password === repassword.current.value) ? checkPasswordStrength(signupData.password) : alert("Password not matched !!")
                : alert("please type right email format !")
        } else {
            alert("Please fill the all field value !!")
        }
    }

    return (
        <div className='container-fluid form'>
            <div className={'box d-flex flex-' + (form_type === "signup" ? "row-reverse" : "row")}>
                {
                    form_type != "signup" ? <img
                            id='form_img'
                            src={process.env.PUBLIC_URL + "/assets/signin.png"} alt=""/> :
                        <img
                            id='form_img'
                            src={process.env.PUBLIC_URL + "/assets/soil.png"} alt=""/>
                }
                <div className='content px-5 pt-3'>
                    {
                        form_type != "signup" ?
                            <h1 className='title fw-bold text-primary'
                            >Sign in</h1> :
                            <h1 className='title fw-bold text-danger'>Sign Up</h1>
                    }
                    <br/>

                    {/* username or email feild */}
                    <div className='username_inp px-3'>
                        <AccountCircleIcon id="icon"/>
                        <input
                            className='py-3 px-2'
                            type="text"
                            placeholder='Username'
                            onChange={
                                (e) => setLoginData({...loginData, username: e.target.value})}
                        />
                    </div>

                    {/* email for signup */}
                    {
                        form_type === "signup" ?
                            <div className='username_inp px-3'>
                                <MailOutlineRoundedIcon id="icon"/>
                                <input
                                    className='py-3 px-2'
                                    type="email"
                                    placeholder='Email'
                                    required
                                    onChange={
                                        (e) => setSignupData({...signupData, email: e.target.value})}
                                />
                            </div> : null
                    }


                    {/* password feild */}
                    <div className='password_inp px-3'>
                        <VpnKeyIcon id="icon"/>
                        <input
                            className='py-3 px-2'
                            type="password"
                            placeholder='Password'
                            onChange={
                                (e) => setLoginData({...loginData, password: e.target.value})}
                        />
                        <VisibilityOffIcon id="icon" className='mx-1'/>
                    </div>

                    {/* repassword for signup */}
                    {
                        form_type === "signup" ?
                            <div className='password_inp px-3'>
                                <VpnKeyIcon id="icon"/>
                                <input
                                    className='py-3 px-2'
                                    type="password"
                                    placeholder='Confirm password'
                                    ref={repassword}
                                />
                                <VisibilityOffIcon id="icon" className='mx-1'/>
                            </div> : null
                    }

                    {/* save password on login or agree on signup  */}
                    {
                        form_type != "signup" ? <SavePassword/> : <AgreeTerms/>
                    }

                    {/* login or signup btn clicked */}
                    {
                        form_type != "signup" ?
                            <button className='btn form_btn w-100 btn-primary' onClick={login}>
                                SIGN-IN
                            </button> :
                            <button className='btn form_btn w-100 btn-danger' onClick={signup}>
                                SIGN-UP
                            </button>
                    }

                    {/* form footer for login & signup */}
                    {
                        form_type != "signup" ?
                            <div className='form_footer py-3'>
                                <span className='text-secondary'>New to the website ?</span>
                                <a
                                    onClick={() => redirectTo("/Signup")}
                                >Signup Up Now</a>
                            </div> :
                            <div className='form_footer py-3'>
                                <span className='text-secondary'>Already have an account ?</span>
                                <a
                                    onClick={() => redirectTo("/Login")}
                                    className='text-danger'>Log in</a>
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
                            src={process.env.PUBLIC_URL + "/assets/facebook.png"}/>
                        <div id='google'>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/google.png"}/>
                        </div>
                        <div id='apple'>
                            <AppleIcon id="apple_icon"/>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Index
