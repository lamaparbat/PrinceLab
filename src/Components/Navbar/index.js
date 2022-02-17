import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../Redux/Actions";
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';

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

    //create instance of redux dispatch & useselectore
    const dispatch = useDispatch();

    //update profile nav visibility
    const [isNavVisible, setNavVisible] = useState("");

    // setting Nav visible
    const [isSettingNavVisible, setSettingNavVisible] = useState(false);

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
            <div className={"profile_nav d-" + (isNavVisible ? "block" : "none")}>
                {
                    (owner.username) ?
                        <>
                            <CancelIcon id="cancleIcon" onClick={showProfileNav}/>
                            <div className="pic">
                                <img src={process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
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

        //hide setting nav
        const cancelSettingNav = () => {
            isSettingNavVisible ? setSettingNavVisible(false) : setSettingNavVisible(true);
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
                style={{marginTop: "-500px"}}
            >
                <CancelIcon id="cancleIcon" onClick={cancelSettingNav}/>
                <div className="pic">
                    <img src={process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                    <p className="mt-2">{owner.email}</p>
                </div>
                <div className="profile_nav_row d-flex flex-column justify-content-center">
                    <button className="mb-2 py-1 rounded-pill border-white">Edit Profile</button>
                    <button className="mb-2 py-1 rounded-pill border-white">Change Password</button>
                    <button className="mb-2 py-1 rounded-pill border-white">Notification</button>
                    <button
                        className="mb-2 py-1 rounded-pill border-white"
                        onClick={logout}
                    >Sign Out</button>
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
                        src={process.env.PUBLIC_URL + "/assets/agriculture2.png"}
                        style={{border: "0.5px solid white"}}
                        onClick={showProfileNav}
                    />
                </li>
                <ProfileNav/>
                <SettingNav/>
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
                            src={process.env.PUBLIC_URL + "/assets/agriculture2.png"}
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
