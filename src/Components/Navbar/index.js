import {useEffect, useState} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../Redux/Actions";
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {toast, ToastContainer} from "react-toastify";
import axios from 'axios';
import {app, db} from "../../firebaseDB";

function Index() {
    //creating instance of useNavigate
    const navigate = useNavigate();

    //creating instance of useLocation
    const cur_route = useLocation();

    //fetched the cache data
    let owner = JSON.parse(localStorage.getItem("princelab"))
    if (owner === null || owner.username === "") {
        owner = {
            username: "", email: "", profile: ""
        }
    }

    //form focus
    const [usernameFocus, setUsernameFocus] = useState(true);
    const [emailFocus, setEmailFocus] = useState(false);

    // edit profile data
    const [editProfileData, setEditProfileData] = useState({
        username: owner.username,
        email: owner.email,
        profile: {}
    });

    //create instance of redux dispatch & useselectore
    const dispatch = useDispatch();

    //update profile nav visibility
    const [isNavVisible, setNavVisible] = useState("");

    // setting Nav visible
    const [isSettingNavVisible, setSettingNavVisible] = useState(false);

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
        })
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

        return (<div
            className={"profile_nav d-" + (isNavVisible ? "block" : "none")}
            style={owner.email != "" ? {marginTop: "-380px"} : {marginTop: "-280px"}}
        >
            {(owner.username) ? <>
                <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                <div className="pic">
                    <img
                        src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                    <p className="mt-2">{owner.email}</p>
                </div>
                <div className="profile_nav_row">
                    <div className="nav_card" onClick={changeTheme}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/themes.svg"}/>
                        <p>Theme</p>
                    </div>
                    <div className="nav_card" onClick={openSettingNav}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/user.svg"}/>
                        <p>Setting</p
                        >
                    </div>
                </div>
            </> : <>
                <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                <div className="profile_nav_row mt-5">
                    <div className="nav_card" onClick={changeTheme}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/themes.svg"}/>
                        <p>Theme</p>
                    </div>
                    <div className="nav_card" onClick={() => {
                        navigate("/Login")
                        setNavVisible(false)
                    }}>
                        <img
                            src={process.env.PUBLIC_URL + "/assets/user.svg"}/>
                        <p>Sign In</p
                        >
                    </div>
                </div>
            </>}
        </div>)
    }

    //custom setting nav items
    const SettingNav = () => {
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
            isSettingNavVisible ? setSettingNavVisible(false) : setSettingNavVisible(true);
            setNavVisible(true);
        }

        //logout
        const logout = () => {
            setSettingNavVisible(false)
            //reset the cache
            localStorage.setItem("princelab", JSON.stringify({
                username: "", email: ""
            }))

            navigate("/Login")
        }

        return (<div
            className={"profile_nav d-" + (isSettingNavVisible ? "block" : "none")}
            style={{marginTop: "-420px"}}
        >
            <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
            <div className="pic">
                <img
                    src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                <p className="mt-2">{owner.email}</p>
            </div>
            <div className="profile_nav_row d-flex flex-column justify-content-center">
                <button
                    className="mb-2 py-1 rounded-pill border-white"
                    onClick={() => {
                        setSettingNavVisible(false);
                        setEditNavVisible(true)
                    }}
                >Edit Profile
                </button>
                <button
                    className="mb-2 py-1 rounded-pill border-white"
                    onClick={() => {
                        setChangePasswordNavVisible(true);
                        setSettingNavVisible(false);
                    }}
                >Change Password
                </button>
                <button
                    className="mb-2 py-1 rounded-pill border-white"
                    onClick={logout}
                >Sign Out
                </button>
            </div>
        </div>)
    }

    //custom setting nav items
    const EditNav = () => {
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

            e.target.name != "profile" ? setEditProfileData({
                ...editProfileData, [e.target.name]: e.target.value
            }) : setEditProfileData({
                ...editProfileData, [e.target.name]: e.target.files[0]
            })
        }

        // edit btn clicked
        const editProfile = () => {
            let fileName = editProfileData.profile.name

            const storage = getStorage();
            const metadata = {
                contentType: 'image/jpeg'
            };
            const storageRef = ref(storage, 'uploads/' + fileName);
            const uploadTask = uploadBytesResumable(storageRef, editProfileData.profile, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    toast.info('Upload is ' + progress + '% done');
                    // switch (snapshot.state) {
                    //     case 'paused':
                    //         toast.info('Upload is paused');
                    //         break;
                    //     case 'running':
                    //         toast.info('Upload is running');
                    //         break;
                    // }
                },
                (error) => {
                    toast.error(error.message)
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // upload data to real time databse
                            db.ref(`/users`).on('value', snapshot => {
                                snapshot.forEach((user) => {
                                    if (user.val().email === owner.email) {
                                        const docKey = user.key;
                                        //save the user data in db
                                        const db_api = process.env.REACT_APP_CRUD_DB_URL+`users/${docKey}.json`;
                                        axios.put(db_api,{
                                            username:editProfileData.username,
                                            email:editProfileData.email,
                                            profile:downloadURL
                                        })
                                            .then(res => {
                                                // toast.success("Profile updated...")
                                            })
                                            .catch(err => {
                                                toast.error(err.message)
                                            })
                                    }
                                })
                            });
                    });
                }
            );
        }

        return (<div
            className={"profile_nav d-" + (isEditNavVisible ? "block" : "none")}
            style={{marginTop: "-550px"}}>
            <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
            <div className="pic">
                <img
                    src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
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
                    className={"btn btn-primary rounded-1 mt-3 mb-2"}
                    onClick={editProfile}
                >Save Changes
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

        return (<div
            className={"profile_nav d-" + (isChangePasswordNavVisibile ? "block" : "none")}
            style={{marginTop: "-450px"}}
        >
            <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
            <div className="pic">
                <img
                    src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}
                />
            </div>
            <br/>
            <div className="profile_nav_row d-flex flex-column justify-content-center">
                <span>New Password</span>
                <input
                    type="password"
                    className={"form-control py-1  text-secondary shadow-none mb-2"}
                    placeholder="Enter new password"
                />
                <span>Password</span>
                <input
                    type="password"
                    className={"form-control py-1 shadow-none mb-2"}
                    placeholder="Reenter password"
                />
                <button className="btn btn-primary rounded-1 mt-2 mb-1">Change Password</button>
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
                        <span className={"text-" + (cur_route.pathname === "/" ? "secondary" : "light")}>
                            Home</span></Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className={'text-decoration-none text-danger '}
                      to="/Feature">
                        <span className={"text-" + (cur_route.pathname === "/Feature" ? "secondary" : "light")}>
                            Feature</span>
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to="/Download">
                        <span className={"text-" + (cur_route.pathname === "/Download" ? "secondary" : "light")}>
                            Download</span>
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to="/Pricing">
                        <span className={"text-" + (cur_route.pathname === "/Pricing" ? "secondary" : "light")}>
                            Pricing</span>
                </Link>
            </li>
            <li className='link  text-decoration-none'>
                <Link className='text-decoration-none' to="/About">
                        <span className={"text-" + (cur_route.pathname === "/About" ? "secondary" : "light")}>
                            About </span>
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
                    src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}
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
        <div className='resp_nav'>
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
                    <Link className='text-decoration-none' to="/Store">
                        <span className={"text-" + (cur_route.pathname === "/Store" ? "secondary" : "primary")}>
                            Store</span>
                    </Link></li>
                <li className='link  text-decoration-none'>
                    <Avatar
                        id="avatar"
                        src={owner.profile != "" ? owner.profile : process.env.PUBLIC_URL + "/assets/agriculture2.png"}
                        style={{border: "0.5px solid white"}}
                        onClick={showProfileNav}
                    />
                </li>
            </div>
        </div>
        <ToastContainer position="top-center"/>
    </>);
}

export default Index;
