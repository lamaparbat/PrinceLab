import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { darkTheme, lightTheme } from "../../Redux/Actions";
import $ from 'jquery';
import styles from '../../styles/Navbar/navbar.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { toast, ToastContainer } from "react-toastify";
import CryptoJS from 'crypto-js';
import { Secret } from '../../secret';


//prefetching at build time
export const getStaticProps = async () => {
  const result = await fetch("http://localhost:3000/api/hello");
  const test_data = await result.json();
  return {
    props: {
      test_data
    }
  }
}



function Index({test_data}) {
  //creating instance of useNavigate
  const navigate = useRouter();

  // create dispatcher instance
  const dispatch = useDispatch();

  //creating instance of useLocation
  const cur_route = useRouter().pathname;

  //store the database data insertion
  const [isLoading, setLoading] = useState(false);

  //mobile nav visibility state
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

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
  // const dispatch = useDispatch();

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

  // show parent nav bar
  const showNav = () => {
    (mobileNavVisible) ?
      setMobileNavVisible(false) :
      setMobileNavVisible(true);
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
    }, [cur_route.pathname]);
    
    //minimizing the height based on the full window contianer 

    return (
      <div
        className={styles.profile_nav + " d-" + (isNavVisible ? "block" : "none")}
        style={userCache.email !== "" ? { marginTop: "-380px" } : { marginTop: "-280px" }}
      >
        {(userCache.username) ? <>
          <CancelIcon id={styles["cancleIcon"]} onClick={showProfileNav} />
          <div className={styles.pic}>
            <img
              alt="agriculture"
              src={userCache.profile !== "" ? userCache.profile :
                "/assets/agriculture2.png"} />
            <p className="mt-2">{userCache.username}</p>
          </div>
          <div className={styles.profile_nav_row}>
            <div className={styles.nav_card} onClick={changeTheme}>
              <img
                alt="nav_icon"
                src={"/assets/theme.png"} />
              <p>Theme</p>
            </div>
            <div className={styles.nav_card} onClick={openSettingNav}>
              <img
                src={"/assets/user.svg"}
                alt="nav_icon"
              />
              <p>Setting</p>
            </div>
          </div>
        </> : <>
          <CancelIcon id={styles["cancleIcon"]} onClick={showProfileNav} />
          <div className={styles.profile_nav_row + " mt-5"}>
            <div className={styles.nav_card} onClick={changeTheme}>
              <img
                loading='lazy'
                alt="theme"
                src={"/assets/theme.png"} />
              <p>Theme</p>
            </div>
            <div className={styles.nav_card} onClick={() => {
              navigate.push("/Login")
              setNavVisible(false)
            }}>
              <img
                alt="user"
                loading='lazy'
                src={"/assets/user.svg"} />
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
    }, [userCache.mode])

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
      navigate.push("/Login")
    }

    return (
      <div
        className={styles.profile_nav + " d-" + (isSettingNavVisible ? "block" : "none")}
        style={{ marginTop: "-420px" }}
      >
        <KeyboardBackspaceIcon className="btn p-0" onClick={goBack} />
        <div className={styles.pic}>
          <img
            loading='lazy'
            alt="agriculture"
            src={userCache.profile !== "" ? userCache.profile : "/assets/agriculture2.png"} />
          <p className="mt-2">{userCache.email}</p>
        </div>
        <div className={styles.profile_nav_row + " d-flex flex-column justify-content-center"}>
          <button
            className="mb-2 py-1 border-white rounded-pill"
            id={styles["edit_profile_btn"]}
            onClick={() => {
              setSettingNavVisible(false);
              setEditNavVisible(true)
            }}
          >Edit Profile
          </button>
          <button
            className="mb-2 py-1 border-white rounded-pill"
            id={styles["change_password_btn"]}
            onClick={() => {
              setChangePasswordNavVisible(true);
              setSettingNavVisible(false);
            }}

          >Change Password
          </button>
          <button
            className="mb-2 py-1 border-white rounded-pill"
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
      console.log()
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
      //
      let fileName = editProfileData.profile.name;
    }

    return (
      <div
        className={styles.profile_nav + " d-" + (isEditNavVisible ? "block" : "none")}
        style={{ marginTop: "-550px" }}>
        <KeyboardBackspaceIcon className="btn p-0" onClick={goBack} />
        <div className={styles.pic}>
          <img
            alt="agriculture"
            loading='lazy'
            src={userCache.profile != "" ? userCache.profile : "/assets/agriculture2.png"} />
        </div>
        <div className={styles.profile_nav_row + " d-flex flex-column justify-content-center"}>
          <span>Username</span>
          <input
            type="text"
            name={"username"}
            autoFocus={usernameFocus}
            value={editProfileData.username}
            className={styles.username_inp + " form-control py-1 text-secondary shadow-none mb-2"}
            onChange={editFormInput}
          />
          <span>Email</span>
          <input
            type="email"
            name={"email"}
            autoFocus={emailFocus}
            className={styles.password_inp + " form-control py-1 text-secondary shadow-none mb-2"}
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

    // update the password
    const changePassword = () => {
      const current_user_email = userCache.email

    }

    return (
      <div
        className={"profile_nav d-" + (isChangePasswordNavVisibile ? "block" : "none")}
        style={{ marginTop: "-450px" }}
      >
        <KeyboardBackspaceIcon className="btn p-0" onClick={goBack} />
        <div className={styles.pic}>
          <img
            alt="agriculture"
            src={userCache.profile != "" ? userCache.profile : "/assets/agriculture2.png"}
          />
        </div>
        <br />
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
            onClick={isLoading ? null : changePassword}>{
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
    <div className={'container fixed-bottom ' + styles.navbar}>
      {
        console.log(test_data)
      }
      <li className={styles.link + ' text-decoration-none text-danger'}>
        <Link
          className={'text-decoration-none text-'}
          href="/">
          {
            (cur_route.pathname === "/" ?
              <span className="text-white py-1">
                Home <hr className="bg-white position-relative my-2" /></span>
              : <span className="text-white">Home</span>
            )
          }
        </Link>
      </li>
      <li className={styles.link + '  text-decoration-none'}>
        <Link className={'text-decoration-none text-white '}
          href="/Feature">
          {
            (cur_route.pathname === "/Feature" ?
              <span className="text-white py-1">
                Features <hr className="bg-white position-relative my-2" /></span>
              : <span className="text-white">Features</span>
            )
          }
        </Link>
      </li>
      <li className={styles.link + '  text-decoration-none'}>
        <Link className='text-decoration-none' href="/Download">
          {
            (cur_route.pathname === "/Download" ?
              <span className="text-white py-1">
                Download <hr className="bg-white position-relative my-2" /></span>
              : <span className="text-white">Download</span>
            )
          }
        </Link>
      </li>
      <li className={styles.link + '  text-decoration-none'}>
        <Link className='text-decoration-none' href={"/Pricing"}>
          {
            (cur_route.pathname === "/Pricing" ?
              <span className="text-white py-1">
                Pricing <hr className="bg-white position-relative my-2" /></span>
              : <span className="text-white">Pricing</span>
            )
          }
        </Link>
      </li>
      <li className={styles.link + '  text-decoration-none'}>
        <Link className='text-decoration-none' href="/AiStore">
          {
            (cur_route.pathname === "/AiStore" ?
              <span className="text-white py-1">AI Store</span>
              : <span className="text-white">AI Store</span>
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
      <li className={styles.link + '  text-decoration-none'}>
        <Avatar
          id="avatar"
          src={userCache.profile === "" || userCache.profile === undefined ? "/assets/agriculture2.png" : userCache.profile}
          style={{ border: "0.5px solid white" }}
          onClick={showProfileNav}
        />
      </li>
      <ProfileNav />
      <SettingNav />
      <EditNav />
      <ChangePassword />
      <button className={styles.shortcut_btn + ' btn btn-light'} onClick={showNav}>
        <KeyboardArrowUpIcon />
      </button>
    </div>

    {/* on mobile view */}
    <div className={styles.resp_nav} style={mobileNavVisible ? {display:"flex"}:{display:"none"}}>
      <div className={styles.items}>
        <li className={styles.link + ' text-decoration-none'}>
          <Link className={'text-decoration-none'} href="/">
            <span className={"text-" + (cur_route.pathname === "/" ? "secondary" : "primary")}>
              Home</span>
          </Link>
        </li>
        <li className={styles.link + '  text-decoration-none'}>
          <Link className='text-decoration-none' href="/Feature">
            <span className={"text-" + (cur_route.pathname === "/Feature" ? "secondary" : "primary")}>
              Feature</span>
          </Link></li>
        <li className={styles.link + '  text-decoration-none'}>
          <Link className='text-decoration-none' href="/Download">
            <span className={"text-" + (cur_route.pathname === "/Download" ? "secondary" : "primary")}>
              Download</span>
          </Link></li>
        <li className={styles.link + '  text-decoration-none'}>
          <Link className='text-decoration-none' href="/Pricing">
            <span className={"text-" + (cur_route.pathname === "/Pricing" ? "secondary" : "primary")}>
              Pricing</span>
          </Link></li>
        <li className={styles.link + '  text-decoration-none'}>
          <Link className='text-decoration-none' href="/AiStore">
            <span className={"text-" + (cur_route.pathname === "/AiStore" ? "secondary" : "primary")}>
              AI Store
            </span>
          </Link>
        </li>
        {/*<li className='link  text-decoration-none'>*/}
        {/*    <Link className='text-decoration-none' to="/Store">*/}
        {/*        <span className={"text-" + (cur_route.pathname === "/Store" ? "secondary" : "primary")}>*/}
        {/*            Store</span>*/}
        {/*    </Link></li>*/}
        <li className={styles.link + '  text-decoration-none'}>
          <Avatar
            id={styles["avatar"]}
            loading='lazy'
            defer="async"
            src={userCache.profile === "" || userCache.profile === undefined ? "/assets/agriculture2.png" : userCache.profile}
            style={{ border: "0.5px solid white" }}
            onClick={showProfileNav}
          />
        </li>
      </div>
    </div>
    <ToastContainer autoClose={1000} position="top-center" />
  </>);
}

export default Index;
