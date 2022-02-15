import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {darkTheme, lightTheme} from "../../Redux/Actions";
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';

function Index() {
    //create instance of redux dispatch
    const dispatch = useDispatch();

    //update profile nav
    const [isNavVisible, setNavVisible] = useState("");

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

    const showNav = () => {
        if ($(".resp_nav").css("display") === "none") {
            $(".resp_nav").css("display", "flex");
        } else {
            $(".resp_nav").css("display", "none");
        }
    }

    //custom profile nav items
    const ProfileNav = () => {
        //change theme
        const changeTheme = () => {
            if(localStorage.getItem("theme") === "light"){
                localStorage.setItem("theme", "dark");
                dispatch(darkTheme());
                setTheme("dark");
            }else{
                localStorage.setItem("theme", "light");
                dispatch(lightTheme());
                setTheme("light");
            }
        }

        return (
            <div className={"profile_nav d-" + (isNavVisible ? "block" : "none")}>
                <div className="pic">
                    <img src={process.env.PUBLIC_URL + "/assets/agriculture2.png"}/>
                    <p className="mt-2">prince@gmail.com</p>
                </div>
                <div className="profile_nav_row">
                    <div className="nav_card" onClick={changeTheme}>
                        <img
                            src={localStorage.getItem("theme") === "light" ?
                                process.env.PUBLIC_URL + "/assets/theme.png" :
                            process.env.PUBLIC_URL + "/assets/theme1.png"}/>
                        <p>Theme</p>
                    </div>
                    <div className="nav_card">
                        <img
                            src={localStorage.getItem("theme") === "light" ?
                            process.env.PUBLIC_URL + "/assets/profile.png" :
                            process.env.PUBLIC_URL + "/assets/profile1.png"}/>
                        <p>User</p>
                    </div>
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
                <ProfileNav/>
                <button className='shortcut_btn btn btn-light' onClick={ showNav}>
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
