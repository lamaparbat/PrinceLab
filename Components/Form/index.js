import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import validator from "validator";
import Image from 'next/image';
// import {passwordStrength} from 'check-password-strength';
import { db } from '../../firebaseDB';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, sendEmailVerification } from "firebase/auth";
import axios from 'axios';
import styles from '../../styles/Form/index.module.css';
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
import redirectRoute from "../../Redux/Reducers/RedirectRoute";
import CryptoJS from 'crypto-js';
import { Secret } from '../../secret';

function Index({ type }) {
    //creating instance of useSelector() -> redux
    const destineRoute = useSelector(state => state.RedirectRoute)

    //get the update background mode form redux-store
    const bgMode = useSelector(state => state.changeTheme)

    //loading features on manipulating database
    const [isLoading, setLoading] = useState(false);

    const [cache, setCache] = useState(null);

    //all user data
    const [users, setUsers] = useState([]);

    //change password icon on show mode
    const [isKeyIconShow, setKeyIconShow] = useState(false);
    const [isKeyIcon2Show, setKeyIcon2Show] = useState(false);

    //get the current route
    const cur_route = useRouter().pathname

    //create instance of useNavigate for routing
    const navigate = useRouter();

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
        //fetch cache
        setCache(localStorage.getItem("theme"))

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

    //set src base on signin form type
    const [currentFormImg1, setCurrentFormImg1] = useState(() => {
        return cache !== "dark" ? "/assets/signin.png" :
            "/assets/moon2.png"
    })

    //set src base on signup form type
    const [currentFormImg2, setCurrentFormImg2] = useState(() => {
        return cache !== "dark" ? "/assets/soil.png" :
            "/assets/moon1.png"
    })

    //change the background content based on current mode/theme
    useEffect(() => {
        setCurrentFormImg1(() => {
            return cache !== "dark" ? "/assets/signin.png" :
                "/assets/moon2.png"
        })
        setCurrentFormImg2(() => {
            return cache !== "dark" ? "/assets/soil.png" :
                "/assets/moon1.png"
        })
    }, [bgMode])

    // custom toggle btn
    const ToggleBtn = () => {
        return (
            <label className={styles.switch}>
                <input type="checkbox" />
                <span className={styles.slider + " round"}></span>
            </label>
        )
    }

    //custom save password component
    const SavePassword = () => {
        return (
            <div className={styles.save_info}>
                <div className={styles.save_pw} onClick={() => setPw(true)}>
                    <ToggleBtn />
                    <span id={styles["remem_span"]} className='mx-3'>Remember Password</span>
                </div>
                <span
                    className={"text-secondary"}
                    id={styles["forgetpassword_link"]}
                    onClick={() => navigate.push("/ForgetPassword")}
                >Forget password ?</span>
            </div>
        )
    }

    // custom agree terms and condition component
    const AgreeTerms = () => {
        return (
            <div className={styles.agree_terms}>
                <input type="checkbox"
                    className={styles.checkbox}
                    onClick={() => setAgreeTerms(true)}
                />
                <span className='mx-3 text-secondary'>I read & agree to
                    <span
                        onClick={() => navigate.push("/Terms")}
                        className='text-danger btn p-0'> &nbsp;Terms and Condtion</span>
                </span>
            </div>
        )
    }

    //redirect the component
    const redirectTo = (route) => {
        navigate.push(route);
    }

    // login btn clicked event
    const login = async () => {
        if (loginData.username !== "" && loginData.password !== "") {
            setLoading(true);

            //SENDING LOGIN REQUEST TO BACKEND SERVER
            try {
                const result = await axios.post("http://5.189.134.55:8000/users/login/", {
                    email: loginData.username,
                    password: loginData.password
                });
                //extracting token from response
                const { access_token, refresh_token } = result.data;
                
                toast.success("Login successfully");
                
                //encrypt the user data
                const login_encrypted_data = CryptoJS.AES.encrypt(JSON.stringify({
                    username: user.username,
                    email: loginData.email,
                    profile: loginData.profile,
                    mode: "custom",
                    access_token: access_token,
                    refresh_token:refresh_token
                }), Secret()).toString();
                
                //set new user encrypted cache
                // localStorage.setItem("princelab", login_encrypted_data);
                
                //auto redirect after login
                if (destineRoute !== "") {
                    navigate.push("/" + destineRoute)
                } else {
                    setLoading(false);
                    //delay the notice by 1 second
                    setTimeout(() => {
                        navigate.push("/")
                        //refresh the page
                        window.location.assign("");
                    }, 1000)
                }
                
            } catch (error) {
                toast.error("Issue occurred while sending request !")
            }

            
            //sending data to the firebase db server
            users.forEach(user => {
                if ((user.username.trim() === loginData.username.trim()) && (user.password.trim() === loginData.password.trim())) {
                    toast.success("Login successfully");

                    //encrypt the user data
                    const login_encrypted_data = CryptoJS.AES.encrypt(JSON.stringify({
                        username: user.username,
                        email: user.email,
                        profile: user.profile,
                        mode: "custom"
                    }), Secret()).toString();

                    //set new user encrypted cache
                    localStorage.setItem("princelab", login_encrypted_data);

                    //auto redirect after login
                    if (destineRoute !== "") {
                        navigate.push("/" + destineRoute)
                    } else {
                        setLoading(false);
                        //delay the notice by 1 second
                        setTimeout(() => {
                            navigate.push("/")
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
                        navigate.push("/Login")
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
                autoFillForm(result.user);

            }).catch((error) => {
                console.error(error)
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
                console.log(result.user)
            }).catch((error) => {
                console.error(error)
            });
    }


    //auto fillup the form fields
    const autoFillForm = (data) => {
        toast.success("Login successfully")

        //encrypt the user data
        const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify({
            username: data.displayName,
            email: data.email,
            profile: data.photoURL,
            mode: "socialAuth"
        }), Secret()).toString();

        //testing
        localStorage.setItem("princelab", encrypted_data);

        //auto redirect after login
        if (destineRoute !== "") {
            navigate.push("/" + destineRoute)
        } else {
            setLoading(false);
            //delay the notice by 1 second
            setTimeout(() => {
                navigate.push("/")
            }, 100)
        }
    }

    return (
        <div className={'container-fluid ' + styles.form}>
            <div className={styles.box + ' d-flex flex-' + (form_type === "signup" ? "row-reverse" : "row")}>
                {
                    form_type != "signup" ?
                        <img
                            id={styles["form_img"]}
                            className='img-fluid'
                            loading='lazy'
                            src={
                                currentFormImg1
                            }
                            alt="" /> :
                        <img
                            id={styles["form_img"]}
                            className='img-fluid'
                            loading='lazy'
                            src={
                                currentFormImg2
                            }
                            alt="" />
                }
                <div className={styles.content + ' px-5 pt-5'}>
                    {
                        form_type != "signup" ?
                            <h1 className='title fw-bold text-primary'
                            >Sign in</h1> :
                            <h1 className='title fw-bold text-danger'>Sign Up</h1>
                    }
                    <br />

                    {/* username or email feild */}
                    <div className={styles.username_inp + ' px-3'}>
                        <AccountCircleIcon id="icon" />
                        <input
                            className='py-3 px-2'
                            type="text"
                            id={styles["username"]}
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
                            <div className={styles.username_inp + ' px-3'} >
                                <MailOutlineRoundedIcon id={styles["icon"]} />
                                <input
                                    className='py-3 px-2'
                                    type="email"
                                    id={styles["email"]}
                                    placeholder='Email'
                                    onChange={
                                        (e) => setSignupData({ ...signupData, email: e.target.value })}
                                />
                            </div> : null
                    }


                    {/* password feild */}
                    <div className={styles.password_inp + ' px-3'}>
                        <VpnKeyIcon id={styles["icon"]} />
                        <input
                            className='py-3 px-2'
                            type="password"
                            placeholder='Password'
                            id={styles["password"]}
                            onChange={
                                (e) => {
                                    form_type != "signup" ? setLoginData({ ...loginData, password: e.target.value })
                                        : setSignupData({ ...signupData, password: e.target.value })
                                }}
                        />
                        {
                            isKeyIconShow ? <VisibilityIcon id={styles["icon"]} onClick={() => showPassword("password")} /> : <VisibilityOffIcon
                                id={styles["icon"]}
                                onClick={() => showPassword("password")}
                            />
                        }
                    </div>

                    {/* repassword for signup */}
                    {
                        form_type === "signup" ?
                            <div className={styles.password_inp + ' px-3'}>
                                <VpnKeyIcon id={styles["icon"]} />
                                <input
                                    className='py-3 px-2'
                                    type="password"
                                    id={styles["repassword"]}
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
                            <button className={styles.form_btn + ' btn w-100 btn-primary rounded-pill'} onClick={login}>
                                SIGN-IN
                            </button> :
                            <button className={styles.form_btn + ' btn w-100 btn-danger rounded-pill'} onClick={signup}>
                                SIGN-UP
                            </button>
                    }

                    {/* form footer for login & signup */}
                    {
                        form_type != "signup" ?
                            <div className={styles.form_footer + ' py-3'}>
                                <span
                                    className='text-secondary p-0'
                                >New to the website ?</span>
                                <a
                                    className={"text-secondary btn p-0"}
                                    onClick={() => redirectTo("/Signup")}
                                >Signup Up Now</a>
                            </div> :
                            <div className={styles.form_footer + ' py-3'}>
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
                                <div className={styles.divider}></div>
                                <span className='text-secondary' id={styles["or"]}>OR</span>
                                <center id={styles["icon_title"]}>
                                    <span className='text-secondary'>Sign-in using</span>
                                </center>
                                <div
                                    className={styles["icons"]}
                                >
                                    <div
                                        className="btn p-0"
                                        id={styles["google"]}
                                        onClick={signupWithGithub}
                                    >
                                        <GitHubIcon />
                                    </div>
                                    <div
                                        id={styles["google"]}
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
