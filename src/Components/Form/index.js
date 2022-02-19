import React, {useState, useEffect, useRef} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import validator from "validator";
import {passwordStrength} from 'check-password-strength';
import {app, auth, db} from '../../firebaseDB';
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import axios from 'axios';
import '../Form/index.css';
import $ from 'jquery';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';

function Index({type}) {
    //all user data
    const [users, setUsers] = useState([]);

    //get the current route
    const cur_route = useLocation().pathname

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
                <span className={"text-secondary"} id="forgetpassword_link">Forget password ?</span>
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
          <span
              onClick={() => navigate("/Terms")}
              className='text-danger btn p-0'> &nbsp;Terms and Condtion</span>
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
        if (type === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    // login btn clicked event
    const login = () => {
        if (loginData.username !== "" && loginData.password !== "" && savepw !== false) {
            //sending data to the firebase db server
            users.forEach(user => {
                if ((user.username === loginData.username) && (user.password === loginData.password)) {
                    notice("success", "Login successfully")
                    localStorage.setItem("princelab", JSON.stringify({
                        username: user.username,
                        email: user.email
                    }));
                    //delay the notice by 1 second
                    setTimeout(() => {
                        navigate("/")
                    }, 1000)
                }
            })
        } else {
            toast.error("Please fill the all field value !!");
        }
    }

    //check password strength
    const checkPasswordStrength = (pw) => {
        // strong pw =  A@2asdF2020!!*
        //weak pw = asdf1234
        //too weak = asdfasdf

        notice("error", passwordStrength(pw).value);
        //sending data to the firebase db server
        axios.post("https://princelab-b263f-default-rtdb.firebaseio.com/users.json", signupData)
            .then(res => {
                console.log(res)
                notice("success", "Registration successfull");

                //reset login data
                setLoginData({
                    username: "",
                    password: "",
                });

                setTimeout(() => {
                    navigate("/Login")
                }, 2000)
            })
            .catch(err => {
                notice("success", "Registration Failed");
                console.log(err.message)
            })
    }

    // login btn clicked event
    const signup = () => {
        if (signupData.username !== "" && agreeTerms !== false && signupData.email !== "" && signupData.password !== "" && signupData.repassword !== "") {
            validator.isEmail(signupData.email) ?
                (signupData.password === repassword.current.value) ? checkPasswordStrength(signupData.password) : toast.error("Password not matched !")
                : toast.error("please type right email format !");
        } else {
            toast.error("Please fill the all field value !!");
        }
    }

    //show password
    const showPassword = (id) => {
        $(`#${id}`).attr("type") === "password" ? $("#password").attr("type", "text") : $("#password").attr("type", "password")
    }

    //signup with google
    const signupWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                //auto fill the form
                autoFillForm(result.user);
            }).catch((error) => {
            console.log(error)
        });
    }

    //signup with google
    const signupWithGithub = () => {
        const provider = new GithubAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                //auto fill the form
                autoFillForm(result.user);
            }).catch((error) => {
            console.log(error)
        });
    }


    //auto fillup the form fields
    const autoFillForm = (data) => {
        if (cur_route === "/Signup") {
            $("#username").val(data.displayName)
            $("#email").val(data.email)
        } else {
            notice("success", "Login successfully")
            localStorage.setItem("princelab", JSON.stringify({
                username: data.displayName,
                email: data.email,
                profile: data.photoURL
            }));
            //delay the notice by 1 second
            setTimeout(() => {
                navigate("/")
            }, 1000)
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
                            id='username'
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
                                    id="email"
                                    placeholder='Email'
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
                            id="password"
                            onChange={
                                (e) => setLoginData({...loginData, password: e.target.value})}
                        />
                        <VisibilityOffIcon
                            id="icon" className='mx-1'
                            onClick={() => showPassword("password")}
                        />
                    </div>

                    {/* repassword for signup */}
                    {
                        form_type === "signup" ?
                            <div className='password_inp px-3'>
                                <VpnKeyIcon id="icon"/>
                                <input
                                    className='py-3 px-2'
                                    type="password"
                                    id="repassword"
                                    placeholder='Confirm password'
                                    ref={repassword}
                                />
                                <VisibilityOffIcon
                                    id="icon"
                                    onClick={() => showPassword("repassword")}
                                    className='mx-1'/>
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
                                <span
                                    className='text-secondary btn p-0'
                                    onClick={() => navigate("/Signup")}
                                >New to the website ?</span>
                                <a
                                    className={"text-secondary btn p-0"}
                                    onClick={() => redirectTo("/Signup")}
                                >Signup Up Now</a>
                            </div> :
                            <div className='form_footer py-3'>
                                <span className='text-secondary btn p-0'>Already have an account ?</span>
                                <a
                                    onClick={() => redirectTo("/Login")}
                                    className='text-danger btn p-0'>Log in</a>
                            </div>
                    }

                    {/* divider */}
                    <div className='divider'></div>
                    <span className='text-secondary' id='or'>OR</span>

                    {/* social media icons */}
                    <center id="icon_title">
                        <span className='text-secondary'>Sign Up using</span>
                    </center>
                    <div
                        className='icons'
                    >
                        <div
                            className="btn p-0"
                            id='google'
                            onClick={signupWithGithub}
                        >
                            <GitHubIcon/>
                        </div>
                        <div
                            id='google'
                            onClick={signupWithGoogle}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/assets/google.png"}/>
                        </div>
                        <div id='apple'>
                            <AppleIcon id="apple_icon"/>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer/><br/><br/>
        </div>
    )
}

export default Index
