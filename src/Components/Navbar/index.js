import {useEffect, useState, useRef} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../Redux/Actions";
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {toast, ToastContainer} from "react-toastify";
import axios from 'axios';
import { db } from "../../firebaseDB";
import CryptoJS from 'crypto-js';
import { Secret } from '../../secret';

function Index() {
    //creating instance of useNavigate
    const navigate = useNavigate();

    //creating instance of useLocation
    const cur_route = useLocation();

    //store the database data insertion
    const [isLoading, setLoading] = useState(false);
    
    //define cache data schema
    const [userCache, setUserCache] = useState({
        email: "",
        profile: "",
        username: "",
        mode: ""
    });
    
    // edit profile data
    const [editProfileData, setEditProfileData] = useState({
        username: userCache.username,
        email: userCache.email,
        password: "",
        profile: {}
    });
    
    // track the changes in browser cache
    useEffect(() => {
        //cache data
        if (localStorage.getItem("princelab") !== "null" && localStorage.getItem("princelab") !== null) {
            //fetch the user cache 
            const bytes = CryptoJS.AES.decrypt(localStorage.getItem("princelab"), Secret());
            const originalSession = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setUserCache(originalSession);
            //fill edit profile data
            setEditProfileData({
                username: originalSession.username,
                email: (originalSession.email != null ? originalSession.email : ""),
                password: "",
                profile: {}
            });
        }
    }, []);

    //form focus
    const [usernameFocus, setUsernameFocus] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);

    //create instance of redux dispatch & useselectore
    const dispatch = useDispatch();

    //update profile nav visibility
    const [isNavVisible, setNavVisible] = useState("");

    // setting Nav visible
    const [isSettingNavVisible, setSettingNavVisible] = useState(false);

    //old password & new password
    const oldPassword = useRef("")
    const newPassword = useRef("")

    // edit Nav visible
    const [isEditNavVisible, setEditNavVisible] = useState(false);

    // change password Nav visible
    const [isChangePasswordNavVisibile, setChangePasswordNavVisible] = useState(false);

    //track the cookies theme
    const [theme, setTheme] = useState("light");

    //show navbar on btn click
    useEffect(() => {
        $(".resp_nav").css("display", "none");
        $(".resp_nav").css("position", "fixed");

        $(window).on("resize", () => {
            $(".resp_nav").css("display", "none");
        });
    }, [])

    // show parent nav bar
    const showNav = () => {
        if ($(".resp_nav").css("display") === "none") {
            $(".resp_nav").css("display", "flex");
        } else {
            $(".resp_nav").css("display", "none");
        }
    }

    //show setting nav on
    const openSettingNav = () => {
        if (isSettingNavVisible === false) {
            setSettingNavVisible(true);
            setNavVisible(false);
        } else {
            setSettingNavVisible(false);
            setNavVisible(true);
        }
    }

    //change theme on theme btn clicked
    const ProfileNav = () => {
        //change theme
        const changeTheme = () => {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark");
                dispatch(darkTheme());
                setTheme("dark");
            } else {
                localStorage.setItem("theme", "light");
                dispatch(lightTheme());
                setTheme("light");
            }
            setNavVisible(false);
        }

        //hide the navbar on each component mount up
        useEffect(() => {
            $(".resp_nav").css("display", "none");
        }, [cur_route.pathname])

        return (
            <div
                className={"profile_nav d-" + (isNavVisible ? "block" : "none")}
                style={userCache.email !== "" ? {marginTop: "-380px"} : {marginTop: "-280px"}}
            >
                {(userCache.username) ? <>
                    <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                    <div className="pic">
                        <img
                            alt="agriculture"
                            src={userCache.profile !== "" ? userCache.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                        <p className="mt-2">{userCache.username}</p>
                    </div>
                    <div className="profile_nav_row">
                        <div className="nav_card" onClick={changeTheme}>
                            <img
                                alt="nav_icon"
                                src={process.env.PUBLIC_URL + "/assets/theme.png"}/>
                            <p>Theme</p>
                        </div>
                        <div className="nav_card" onClick={openSettingNav}>
                            <img
                                src={process.env.PUBLIC_URL + "/assets/user.svg"}
                                alt="nav_icon"
                            />
                            <p>Setting</p>
                        </div>
                    </div>
                </> : <>
                    <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                    <div className="profile_nav_row mt-5">
                        <div className="nav_card" onClick={changeTheme}>
                                <img
                                    loading='lazy'
                                    alt="theme"
                                src={process.env.PUBLIC_URL + "/assets/theme.png"}/>
                            <p>Theme</p>
                        </div>
                        <div className="nav_card" onClick={() => {
                            navigate("/Login")
                            setNavVisible(false)
                        }}>
                                <img
                                    alt="user"
                                    loading='lazy'
                                src={process.env.PUBLIC_URL + "/assets/user.svg"}/>
                            <p>Sign In</p>
                        </div>
                    </div>
                </>}
            </div>)
    }

    //custom setting nav items
    const SettingNav = () => {
        //disabled the edit & password button on socialAuth mode
        useEffect(() => {
            if (userCache.mode != "custom") {
                $("#edit_profile_btn").css("display", "none")
                $("#change_password_btn").css("display", "none")
            }
        },[userCache.mode])
        
        // go back
        const goBack = () => {
            isSettingNavVisible ? setSettingNavVisible(false) : setSettingNavVisible(true);
            setNavVisible(true);
        }

        //logout
        const logout = () => {
            setSettingNavVisible(false)
            //reset the cache
            localStorage.setItem("princelab", null);
            navigate("/Login")
        }

        return (
            <div
                className={"profile_nav d-" + (isSettingNavVisible ? "block" : "none")}
                style={{marginTop: "-420px"}}
            >
                <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
                <div className="pic">
                    <img
                        loading='lazy'
                        alt="agriculture"
                        src={userCache.profile !== "" ? userCache.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                    <p className="mt-2">{userCache.email}</p>
                </div>
                <div className="profile_nav_row d-flex flex-column justify-content-center">
                    <button
                        className="mb-2 py-1 border-white"
                        id="edit_profile_btn"
                        onClick={() => {
                            setSettingNavVisible(false);
                            setEditNavVisible(true)
                        }}
                    >Edit Profile
                    </button>
                    <button
                        className="mb-2 py-1 border-white"
                        id="change_password_btn"
                        onClick={() => {
                            setChangePasswordNavVisible(true);
                            setSettingNavVisible(false);
                        }}
                       
                    >Change Password
                    </button>
                    <button
                        className="mb-2 py-1 border-white"
                        onClick={logout}
                    >Sign Out
                    </button>
                </div>
            </div>)
    }

    //custom setting nav items
    const EditNav = () => {
        //check if new image file for profile choose or not ?
        const [isProfileChoose, setProfileChoose] = useState(false);
        
        //change theme
        const changeTheme = () => {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark");
                dispatch(darkTheme());
                setTheme("dark");
            } else {
                localStorage.setItem("theme", "light");
                dispatch(lightTheme());
                setTheme("light");
            }
        }

        // go back
        const goBack = () => {
            isEditNavVisible ? setEditNavVisible(false) : setEditNavVisible(true);
            setSettingNavVisible(true)
        }

        //edit form handling
        const editFormInput = (e) => {
            if (e.target.name === "username") {
                setUsernameFocus(true);
                setEmailFocus(false)
            } else {
                setUsernameFocus(false);
                setEmailFocus(true)
            }

            e.target.name !== "profile" ? setEditProfileData({
                ...editProfileData, [e.target.name]: e.target.value
            }) : setEditProfileData({
                ...editProfileData, [e.target.name]: e.target.files[0]
            })
        }

        // edit btn clicked
        const editProfile = () => {
            let fileName = editProfileData.profile.name;
          
            const finalEditUpdate = (url) => {
                // upload data to real time database
                db.ref("users").on('value', snapshot => {
                    snapshot.forEach((user) => {
                        if (user.val().email === userCache.email) {
                            const docKey = user.key;
                            //save the user data in db
                            const db_api = `https://paradoxauth-56b93-default-rtdb.asia-southeast1.firebasedatabase.app/users/${docKey}.json`;
                            const dbData = {
                                username: editProfileData.username,
                                email: editProfileData.email,
                                password: user.val().password,
                                profile: url != null ? url:editProfileData.profile
                            }
                        
                            axios.put(db_api, dbData)
                                .then(res => {
                                    //encrypt the user data
                                    const encrypted_data = CryptoJS.AES.encrypt(JSON.stringify({
                                        username: editProfileData.username,
                                        email: editProfileData.email,
                                        profile: url != null ? url : editProfileData.profile,
                                        mode: "custom"
                                    }), process.env.REACT_APP_HASH_KEY).toString();

                                    // save data to cache
                                    localStorage.setItem("princelab", encrypted_data);
                                    
                                    setLoading(false);
                                    setEditNavVisible(false);

                                    //refresh once
                                    window.location.assign("")
                                    return true;
                                })
                                .catch(err => {
                                    return false;
                                })
                        }
                    })
                });
            }
            
            //compare and get user password
            db.ref(`/users`).on('value', snapshot => {
                snapshot.forEach((user) => {
                    if (user.val().email === userCache.email) {
                        //loading starts
                        setLoading(true);

                        //update if the new image added or not ?
                        if (fileName === undefined) {
                            //update the password field value
                            setEditProfileData({
                                ...editProfileData,
                                profile:user.val().profile,
                                password: user.val().password
                            });
        
                            finalEditUpdate(user.val().profile)
                        } else {
                            //update the password field value
                            setEditProfileData({
                                ...editProfileData,
                                password: user.val().password
                            });
                            
                            //db config
                            const storage = getStorage();
                            const metadata = {
                                contentType: 'image/jpeg'
                            };
                            const storageRef = ref(storage, 'uploads/' + fileName);
                            const uploadTask = uploadBytesResumable(storageRef, editProfileData.profile, metadata);
                            //upload
                            uploadTask.on('state_changed',
                                (snapshot) => {
                                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                },
                                (error) => {
                                    toast.error(error.message)
                                },
                                () => {
                                    // Upload completed successfully, now we can get the download URL
                                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                        
                                        finalEditUpdate(downloadURL)
                                    });
                                }
                            );
                        }

                    }
                })
            });
        }

        return (
            <div
            className={"profile_nav d-" + (isEditNavVisible ? "block" : "none")}
            style={{marginTop: "-550px"}}>
            <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
            <div className="pic">
                    <img
                        alt="agriculture"
                        loading='lazy'
                    src={userCache.profile != "" ? userCache.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
            </div>
            <div className="profile_nav_row d-flex flex-column justify-content-center">
                <span>Username</span>
                <input
                    type="text"
                    name={"username"}
                    autoFocus={usernameFocus}
                    value={editProfileData.username}
                    className={"form-control username_inp py-1 text-secondary shadow-none mb-2"}
                    onChange={editFormInput}
                />
                <span>Email</span>
                <input
                    type="email"
                    name={"email"}
                    autoFocus={emailFocus}
                    className={"form-control py-1 password_inp text-secondary shadow-none mb-2"}
                    value={editProfileData.email}
                    onChange={editFormInput}
                />
                <span>Choose Profile Pic</span>
                <input
                    className={"form-control mb-2"}
                    type="file"
                    name={"profile"}
                    onChange={editFormInput}
                />
                <button
                    className={isLoading ? "btn btn-primary rounded-1 mt-3 mb-2 disabled" : "btn btn-primary rounded-1 mt-3 mb-2"}
                    onClick={editProfile}>
                    {
                        isLoading ? "Uploading...." : "Save Changes"
                    }
                </button>
            </div>
        </div>)
    }

    // Change password
    const ChangePassword = () => {
        //change theme
        const changeTheme = () => {
            if (localStorage.getItem("theme") === "light") {
                localStorage.setItem("theme", "dark");
                dispatch(darkTheme());
                setTheme("dark");
            } else {
                localStorage.setItem("theme", "light");
                dispatch(lightTheme());
                setTheme("light");
            }
        }

        // go back
        const goBack = () => {
            isChangePasswordNavVisibile ? setChangePasswordNavVisible(false) : setChangePasswordNavVisible(true);
            setSettingNavVisible(true)
        }

        //on btn click
        const btnClick = () => {
            const current_user_email = userCache.email
            //db update
            db.ref("users").on('value', snapshot => {
                if (newPassword.current.value.length > 0 && oldPassword.current.value.length > 0) {
                    setLoading(true);
                    snapshot.forEach((user) => {     
                        if (oldPassword.current.value.length > 0 && user.val().email === current_user_email && user.val().password === oldPassword.current.value.trim()) {
                            const docKey = user.key
                            const userData = {
                                username: user.val().username,
                                email: user.val().email,
                                password: newPassword.current.value,
                                profile: user.val().profile
                            }

                            //save the user data in db
                            const db_api = `https://paradoxauth-56b93-default-rtdb.asia-southeast1.firebasedatabase.app/users/${docKey}.json`;
                            axios.put(db_api, userData)
                                .then(res => {
                                    setLoading(false);
                                    toast.success("Password successfully reset.")
                                    setTimeout(() => {
                                        navigate("/Login");
                                    }, 2000)
                                })
                                .catch(err => {
                                    toast.error(err.message)
                                })
                        } else {
                            setLoading(false);
                            toast.error("Old password donot matched !!")
                        }
                    })
                } 
            });
            
            
        }

        return (
            <div
                className={"profile_nav d-" + (isChangePasswordNavVisibile ? "block" : "none")}
                style={{marginTop: "-450px"}}
            >
                <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
                <div className="pic">
                    <img
                        alt="agriculture"
                        src={userCache.profile != "" ? userCache.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}
                    />
                </div>
                <br/>
                <div className="profile_nav_row d-flex flex-column justify-content-center">
                    <span>New Password</span>
                    <input
                        type="password"
                        ref={newPassword}
                        className={"form-control py-1  text-secondary shadow-none mb-2"}
                        placeholder="Enter new password"
                    />
                    <span>Old Password</span>
                    <input
                        type="password"
                        ref={oldPassword}
                        className={"form-control py-1 shadow-none mb-2"}
                        placeholder="Reenter password"
                    />
                    <button
                        className={isLoading ? "btn btn-primary rounded-1 mt-3 mb-2 disabled" : "btn btn-primary rounded-1 mt-3 mb-2"}
                        onClick={isLoading ? null : btnClick}>{
                            isLoading ? "Changing...." : "Change password"
                        }</button>
                </div>
            </div>)
    }

    //show showProfileNav
    const showProfileNav = () => {
        isNavVisible ? setNavVisible(false) : setNavVisible(true);
    }


    return (<>
        <div className='container navbar fixed-bottom'>
            <li className='link  text-decoration-none text-danger'>
                <Link
                    className={'text-decoration-none text-'}
                    to="/">
                    {
                        (cur_route.pathname === "/" ?
                            <span className="text-white py-1">
                            Home <hr className="bg-white position-relative my-2" /></span>
                        :  <span className="text-white">Home</span>
                        )
                    }
                  </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className={'text-decoration-none text-white '}
                      to="/Feature">
                    {
                        (cur_route.pathname === "/Feature" ?
                                <span className="text-white py-1">
                            Features <hr className="bg-white position-relative my-2" /></span>
                                :  <span className="text-white">Features</span>
                        )
                    }
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to="/Download">
                    {
                        (cur_route.pathname === "/Download" ?
                                <span className="text-white py-1">
                            Download <hr className="bg-white position-relative my-2" /></span>
                                :  <span className="text-white">Download</span>
                        )
                    }
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to={"/Pricing"}>
                    {
                        (cur_route.pathname === "/Pricing" ?
                                <span className="text-white py-1">
                            Pricing <hr className="bg-white position-relative my-2" /></span>
                                :  <span className="text-white">Pricing</span>
                        )
                    }
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to="/aipreview">
                    {
                        (cur_route.pathname === "/aipreview" ?
                                <span className="text-white py-1">
                                AI Store
                                <span className='px-2' id="aistore_new">new</span>
                                <hr className="bg-white position-relative my-2" /></span>
                            : <span className="text-white">AI Store
                                <span className='px-2 py-0' id="aistore_new">new</span>
                            </span>
                        )
                    }
                </Link>
            </li>
            {/*<li className='link  text-decoration-none'>*/}
            {/*    <Link className='text-decoration-none' to="/Store">*/}
            {/*        <span className={"text-"+*/}
            {/*            (cur_route.pathname === "/Store" ? "secondary":"light")}>*/}
            {/*            Store</span>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li className='link  text-decoration-none'>
                <Avatar
                    id="avatar"
                    src={userCache.profile === "" || userCache.profile === undefined ? process.env.PUBLIC_URL + "/assets/agriculture2.png" : userCache.profile}
                    style={{border: "0.5px solid white"}}
                    onClick={showProfileNav}
                />
            </li>
            <ProfileNav/>
            <SettingNav/>
            <EditNav/>
            <ChangePassword/>
            <button className='shortcut_btn btn btn-light' onClick={showNav}>
                <KeyboardArrowUpIcon/>
            </button>
        </div>

        {/* on mobile view */}
        <div className='resp_nav' style={{display:"none",}}>
            <div className='items'>
                <li className='link  text-decoration-none'>
                    <Link className={'text-decoration-none'} to="/">
                             <span className={"text-" + (cur_route.pathname === "/" ? "secondary" : "primary")}>
                            Home</span>
                    </Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Feature">
                        <span className={"text-" + (cur_route.pathname === "/Feature" ? "secondary" : "primary")}>
                            Feature</span>
                    </Link></li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Download">
                            <span className={"text-" + (cur_route.pathname === "/Download" ? "secondary" : "primary")}>
                                Download</span>
                    </Link></li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Pricing">
                            <span className={"text-" + (cur_route.pathname === "/Pricing" ? "secondary" : "primary")}>
                            Pricing</span>
                    </Link></li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/aipreview">
                        <span className={"text-" + (cur_route.pathname === "/aipreview" ? "secondary" : "primary")}>
                            AI Store
                            <span id="aistore_new">new</span>
                        </span>
                    </Link>
                </li>
                {/*<li className='link  text-decoration-none'>*/}
                {/*    <Link className='text-decoration-none' to="/Store">*/}
                {/*        <span className={"text-" + (cur_route.pathname === "/Store" ? "secondary" : "primary")}>*/}
                {/*            Store</span>*/}
                {/*    </Link></li>*/}
                <li className='link  text-decoration-none'>
                    <Avatar
                        id="avatar"
                        loading='lazy'
                        defer="async"
                        src={userCache.profile === "" || userCache.profile === undefined ? process.env.PUBLIC_URL + "/assets/agriculture2.png" : userCache.profile }
                        style={{border: "0.5px solid white"}}
                        onClick={showProfileNav}
                    />
                </li>
            </div>
        </div>
        <ToastContainer autoClose={1000} position="top-center"/>
    </>);
}

export default Index;
