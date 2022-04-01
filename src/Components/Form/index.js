import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Store from "../../Store";
import validator from "validator";
// import {passwordStrength} from 'check-password-strength';
import { app, auth, db } from '../../firebaseDB';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendEmailVerification } from "firebase/auth";
import axios from 'axios';
import '../Form/index.css';
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import AppleIcon from '@mui/icons-material/Apple';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import imageCompression from 'browser-image-compression';
// import redirectRoute from "../../Redux/Reducers/RedirectRoute";

function Index({ type }) {
    //creating instance of useSelector() -> redux
    const destineRoute = useSelector(state => state.RedirectRoute)

    //get the update background mode form redux-store
    const bgMode = useSelector(state => state.changeTheme)

    //loading features on manipulating database
    const [isLoading, setLoading] = useState(false);

    //set src base on signin form type
    const [currentFormImg1, setCurrentFormImg1] = useState(() => {
        return localStorage.getItem("theme") !== "dark" ? process.env.PUBLIC_URL + "/assets/signin.png" :
            process.env.PUBLIC_URL + "/assets/moon2.png"
    })

    //set src base on signup form type
    const [currentFormImg2, setCurrentFormImg2] = useState(() => {
        return localStorage.getItem("theme") !== "dark" ? process.env.PUBLIC_URL + "/assets/soil.png" :
            process.env.PUBLIC_URL + "/assets/moon1.png"
    })

    //all user data
    const [users, setUsers] = useState([]);

    //change password icon on show mode
    const [isKeyIconShow, setKeyIconShow] = useState(false);
    const [isKeyIcon2Show, setKeyIcon2Show] = useState(false);

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
        username: "",
        email: "",
        password: "",
        profile: ""
    });

    //fetched all the user from firebase DB
    useEffect(() => {
        db.ref("users").on('value', snapshot => {
            snapshot.forEach(user => {
                setUsers(prev => [
                    ...prev,
                    user.val()
                ])
            })
        });
        setForm_type(type);

    }, [])

    //change the background content based on current mode/theme
    useEffect(() => {
        setCurrentFormImg1(() => {
            return localStorage.getItem("theme") !== "dark" ? process.env.PUBLIC_URL + "/assets/signin.png" :
                process.env.PUBLIC_URL + "/assets/moon2.png"
        })
        setCurrentFormImg2(() => {
            return localStorage.getItem("theme") !== "dark" ? process.env.PUBLIC_URL + "/assets/soil.png" :
                process.env.PUBLIC_URL + "/assets/moon1.png"
        })
    }, [bgMode])

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
                <div className='save_pw' onClick={() => setPw(true)}>
                    <ToggleBtn />
                    <span id='remem_span' className='mx-3'>Remember Password</span>
                </div>
                <span
                    className={"text-secondary"}
                    id="forgetpassword_link"
                    onClick={() => navigate("/ForgetPassword")}
                >Forget password ?</span>
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

    // login btn clicked event
    const login = () => {
        if (loginData.username !== "" && loginData.password !== "") {
            setLoading(true);
            //sending data to the firebase db server
            users.forEach(user => {
                if ((user.username.trim() === loginData.username.trim()) && (user.password.trim() === loginData.password.trim())) {
                    toast.success("Login successfully")
                    localStorage.setItem("princelab", JSON.stringify({
                        username: user.username,
                        email: user.email,
                        profile: user.profile,
                        mode: "custom"
                    }));

                    console.log(destineRoute)
                    //auto redirect after login
                    if (destineRoute !== "") {
                        navigate("/" + destineRoute)
                    } else {
                        setLoading(false);
                        //delay the notice by 1 second
                        setTimeout(() => {
                            navigate("/")
                            //refresh the page
                            window.location.assign("");
                        }, 1000)
                    }
                }
            })
            if (isLoading === false) {
                toast.error("Login failed !!")
            }
        } else {
            toast.error("Please fill the all field value !!");
        }
    }

    //check if user already exists
    const isUserAlreadyRegistered = () => {
        let flag = false;
        users.map(user => {
            if (user.email.trim() === signupData.email.trim()) {
                flag = true;
            }
        });

        return flag;
    }

    //check password strength
    const checkPasswordStrength = async (pw) => {
        // notice("error", passwordStrength(pw).value);

        //sending data to the firebase db server
        if (isUserAlreadyRegistered()) {
            toast.error("User already exists");
        } else {
            await axios.post("https://paradoxauth-56b93-default-rtdb.asia-southeast1.firebasedatabase.app/users.json", signupData)
                .then(res => {
                    toast.success("Registration successfull");

                    //reset login data
                    setLoginData({
                        username: "",
                        password: "",
                    });

                    //auto redirect after successfully data insert
                    setTimeout(() => {
                        navigate("/Login")
                    }, 1000)
                    
                })
                .catch(err => {
                    toast.error("Registration Failed");
                })
        }
    }

    // signup btn clicked event
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
        if ($(`#${id}`).attr("type") === "password") {
            $("#password").attr("type", "text")
            setKeyIconShow(true)
        } else {
            $("#password").attr("type", "password")
            setKeyIconShow(false)
        }
    }

    //show repassword
    const showRePassword = (id) => {
        if ($(`#${id}`).attr("type") === "password") {
            $(`#${id}`).attr("type", "text")
            setKeyIcon2Show(true)
        } else {
            $(`#${id}`).attr("type", "password")
            setKeyIcon2Show(false)
        }
    }

    //signup with google
    const signupWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        await signInWithPopup(auth, provider)
            .then((result) => {
                //auto fill the form
                console.log(result)
                autoFillForm(result.user);

            }).catch((error) => {
                console.error(error.message)
            });

    }

    //signup with github
    const signupWithGithub = async () => {
        const provider = new GithubAuthProvider();
        const auth = getAuth();
        await signInWithPopup(auth, provider)
            .then((result) => {
                //auto fill the form
                autoFillForm(result.user);
            }).catch((error) => {
                console.error(error.message)
            });
    }


    //auto fillup the form fields
    const autoFillForm = (data) => {
        toast.success("Login successfully")
        localStorage.setItem("princelab", JSON.stringify({
            username: data.displayName,
            email: data.email,
            profile: data.photoURL,
            mode:"socialAuth"
        }));

        
        console.log(destineRoute)
        //auto redirect after login
        if (destineRoute !== "") {
            navigate("/" + destineRoute)
        } else {
            setLoading(false);
            //delay the notice by 1 second
            setTimeout(() => {
                navigate("/")
                //refresh the page
                window.location.assign("");
            }, 1000)
        }
    }

    return (
        <div className='container-fluid form'>
            <div className={'box d-flex flex-' + (form_type === "signup" ? "row-reverse" : "row")}>
                {
                    form_type != "signup" ?
                        <img
                            id='form_img'
                            className='img-fluid'
                            loading='lazy'
                            src={
                                currentFormImg1
                            }
                            alt="" /> :
                        <img
                            id='form_img'
                            className='img-fluid'
                            loading='lazy'
                            src={
                                currentFormImg2
                            }
                            alt="" />
                }
                <div className='content px-5 pt-5'>
                    {
                        form_type != "signup" ?
                            <h1 className='title fw-bold text-primary'
                            >Sign in</h1> :
                            <h1 className='title fw-bold text-danger'>Sign Up</h1>
                    }
                    <br />

                    {/* username or email feild */}
                    <div className='username_inp px-3'>
                        <AccountCircleIcon id="icon" />
                        <input
                            className='py-3 px-2'
                            type="text"
                            id='username'
                            placeholder='Username'
                            onChange={
                                (e) => {
                                    setLoginData({ ...loginData, username: e.target.value })
                                    setSignupData({ ...signupData, username: e.target.value })
                                }}
                        />
                    </div>

                    {/* email for signup */}
                    {
                        form_type === "signup" ?
                            <div className='username_inp px-3'>
                                <MailOutlineRoundedIcon id="icon" />
                                <input
                                    className='py-3 px-2'
                                    type="email"
                                    id="email"
                                    placeholder='Email'
                                    onChange={
                                        (e) => setSignupData({ ...signupData, email: e.target.value })}
                                />
                            </div> : null
                    }


                    {/* password feild */}
                    <div className='password_inp px-3'>
                        <VpnKeyIcon id="icon" />
                        <input
                            className='py-3 px-2'
                            type="password"
                            placeholder='Password'
                            id="password"
                            onChange={
                                (e) => {
                                    form_type != "signup" ? setLoginData({ ...loginData, password: e.target.value })
                                        : setSignupData({ ...signupData, password: e.target.value })
                                }}
                        />
                        {
                            isKeyIconShow ? <VisibilityIcon id="icon" onClick={() => showPassword("password")} /> : <VisibilityOffIcon
                                id="icon"
                                onClick={() => showPassword("password")}
                            />
                        }
                    </div>

                    {/* repassword for signup */}
                    {
                        form_type === "signup" ?
                            <div className='password_inp px-3'>
                                <VpnKeyIcon id="icon" />
                                <input
                                    className='py-3 px-2'
                                    type="password"
                                    id="repassword"
                                    placeholder='Confirm password'
                                    ref={repassword}
                                />
                                {
                                    isKeyIcon2Show ? <VisibilityIcon id="icon" onClick={() => showRePassword("repassword")} /> : <VisibilityOffIcon
                                        id="icon"
                                        onClick={() => showRePassword("repassword")}
                                    />
                                }
                            </div> : null
                    }

                    {/* save password on login or agree on signup  */}
                    {
                        form_type != "signup" ? <SavePassword /> : <AgreeTerms />
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
                                    className='text-secondary p-0'
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


                    {/* social media icons */}
                    {
                        form_type != "signup" ?
                            <>
                                {/* divider */}
                                <div className='divider'></div>
                                <span className='text-secondary' id='or'>OR</span>
                                <center id="icon_title">
                                    <span className='text-secondary'>Sign-in using</span>
                                </center>
                                <div
                                    className='icons'
                                >
                                    <div
                                        className="btn p-0"
                                        id='google'
                                        onClick={signupWithGithub}
                                    >
                                        <GitHubIcon />
                                    </div>
                                    <div
                                        id='google'
                                        onClick={signupWithGoogle}
                                    >
                                        <GoogleIcon />
                                    </div>
                                    {/*<div id='apple'>*/}
                                    {/*    <AppleIcon id="apple_icon"/>*/}
                                    {/*</div>*/}
                                </div>
                            </> : null
                    }

                </div>
            </div>
            <ToastContainer autoClose={1000} position={"top-center"} /><br /><br />
        </div>
    )
}

export default Index
