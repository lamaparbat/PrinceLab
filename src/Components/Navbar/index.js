import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../Redux/Actions";
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Index() {
    //creating instance of useNavigate
    const navigate = useNavigate();

    //fetched the cache data
    let owner = JSON.parse(localStorage.getItem("princelab"))
    if(owner == null){
        owner = {
            username:"",
            email:""
        }
    }

    // edit profile data
    const [editProfileData,setEditProfileData] = useState({
        username:"",
        email:"",
        profile:{}
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
        }

        return (
            <div
                className={"profile_nav d-" + (isNavVisible ? "block" : "none")}
                style={owner.email != "" ? {marginTop: "-380px"} : {marginTop: "-280px"}}
            >
                {
                    (owner.username) ?
                        <>
                            <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                            <div className="pic">
                                <img src={owner.profile}/>
                                <p className="mt-2">{owner.email}</p>
                            </div>
                            <div className="profile_nav_row">
                                <div className="nav_card" onClick={changeTheme}>
                                    <img
                                        src={localStorage.getItem("theme") === "light" ?
                                            process.env.PUBLIC_URL + "/assets/theme.png" :
                                            process.env.PUBLIC_URL + "/assets/theme1.png"}/>
                                    <p>Theme</p>
                                </div>
                                <div className="nav_card" onClick={openSettingNav}>
                                    <img
                                        src={localStorage.getItem("theme") === "light" ?
                                            process.env.PUBLIC_URL + "/assets/profile.png" :
                                            process.env.PUBLIC_URL + "/assets/profile1.png"}/>
                                    <p>Setting</p
                                    >
                                </div>
                            </div>
                        </> :
                        <>
                            <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                            <div className="profile_nav_row mt-3">
                                <div className="nav_card" onClick={changeTheme}>
                                    <img
                                        src={localStorage.getItem("theme") === "light" ?
                                            process.env.PUBLIC_URL + "/assets/theme.png" :
                                            process.env.PUBLIC_URL + "/assets/theme1.png"}/>
                                    <p>Theme</p>
                                </div>
                                <div className="nav_card" onClick={() => navigate("/Login")}>
                                    <img
                                        src={localStorage.getItem("theme") === "light" ?
                                            process.env.PUBLIC_URL + "/assets/profile.png" :
                                            process.env.PUBLIC_URL + "/assets/profile1.png"}/>
                                    <p>Sign In</p
                                    >
                                </div>
                            </div>
                        </>
                }
            </div>
        )
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
            //reset the cache
            localStorage.setItem("princelab", JSON.stringify({
                username:"",
                email:""
            }))

            navigate("/Login")
        }

        return (
            <div
                className={"profile_nav d-" + (isSettingNavVisible ? "block" : "none")}
                style={{marginTop: "-420px"}}
            >
                <KeyboardBackspaceIcon className="btn p-0" onClick={goBack}/>
                <div className="pic">
                    <img src={owner.profile}/>
                    <p className="mt-2">{owner.email}</p>
                </div>
                <div className="profile_nav_row d-flex flex-column justify-content-center">
                    <button
                        className="mb-2 py-1 rounded-pill border-white"
                        onClick={() => {
                            setSettingNavVisible(false);
                            setEditNavVisible(true)
                        }}
                    >Edit Profile</button>
                    <button
                        className="mb-2 py-1 rounded-pill border-white"
                        onClick={() => {
                            setChangePasswordNavVisible(true);
                            setSettingNavVisible(false);
                        }}
                    >Change Password</button>
                    <button
                        className="mb-2 py-1 rounded-pill border-white"
                        onClick={logout}
                    >Sign Out</button>
                </div>
            </div>
        )
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
            e.target.name !="profile" ?
                setEditProfileData({
                    ...editProfileData,
                    [e.target.name] : e.target.value
                }) :
                setEditProfileData({
                    ...editProfileData,
                    [e.target.name] : e.target.files[0]
                })
        }

        // edit btn clicked
        const editProfile = () => {
            console.log(editProfileData)
        }

        return (
            <div
                className={"profile_nav d-" + (isEditNavVisible ? "block" : "none")}
                style={{marginTop: "-550px"}} >
                <KeyboardBackspaceIcon className="btn p-0"  onClick={goBack}/>
                <div className="pic">
                    <img src={owner.profile}/>
                </div>
                <div className="profile_nav_row d-flex flex-column justify-content-center">
                    <span>Username</span>
                    <input
                        type="text"
                        name={"username"}
                        className={"form-control py-1 text-secondary shadow-none mb-2"}
                        onChange={editFormInput}
                    />
                    <span>Email</span>
                    <input
                        type="email"
                        name={"email"}
                        className={"form-control py-1  text-secondary shadow-none mb-2"}
                        placeholder={owner.email}
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
                    >Save Changes</button>
                </div>
            </div>
        )
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
            isChangePasswordNavVisibile ?
                setChangePasswordNavVisible(false) :
                setChangePasswordNavVisible(true);
            setSettingNavVisible(true)
        }

        return (
            <div
                className={"profile_nav d-" + (isChangePasswordNavVisibile ? "block" : "none")}
                style={{marginTop: "-450px"}}
            >
                <KeyboardBackspaceIcon className="btn p-0"  onClick={goBack}/>
                <div className="pic">
                    <img src={owner.profile}/>
                </div><br/>
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
            </div>
        )
    }

    //show showProfileNav
    const showProfileNav = () => {
        isNavVisible ? setNavVisible(false) : setNavVisible(true);
    }


    return (
        <>
            <div className='container navbar fixed-bottom'>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/">Home</Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Feature">Feature</Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Download">Download</Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Pricing">Pricing</Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Link className='text-decoration-none' to="/Store">Store</Link>
                </li>
                <li className='link  text-decoration-none'>
                    <Avatar
                        id="avatar"
                        src={owner.profile}
                        style={{border: "0.5px solid white"}}
                        onClick={showProfileNav}
                    />
                </li>
                <ProfileNav/>
                <SettingNav/>
                <EditNav/>
                <ChangePassword />
                <button className='shortcut_btn btn btn-light' onClick={showNav}>
                    <KeyboardArrowUpIcon/>
                </button>
            </div>

            {/* on mobile view */}
            <div className='resp_nav'>
                <div className='items'>
                    <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/">Home</Link>
                    </li>
                    <li className='link  text-decoration-none'><Link className='text-decoration-none'
                                                                     to="/Feature">Feature</Link></li>
                    <li className='link  text-decoration-none'><Link className='text-decoration-none'
                                                                     to="/Download">Download</Link></li>
                    <li className='link  text-decoration-none'><Link className='text-decoration-none'
                                                                     to="/Pricing">Pricing</Link></li>
                    <li className='link  text-decoration-none'><Link className='text-decoration-none'
                                                                     to="/Store">Store</Link></li>
                    <li className='link  text-decoration-none'>
                        <Avatar
                            id="avatar"
                            src={owner.profile}
                            style={{border: "0.5px solid white"}}
                            onClick={showProfileNav}
                        />
                    </li>
                </div>
            </div>

        </>
    );
}

export default Index;
