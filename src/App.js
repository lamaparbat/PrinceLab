import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import store from './Store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {ThemeProvider} from 'styled-components';
import {DarkTheme} from "./Theme";
import Homepage from './Components/Hompage/index';
import Navbar from '../src/Components/Navbar/index';
import Footer from '../src/Components/Footer/index';
import Feature from '../src/Components/Feature/index';
import Pricing from '../src/Components/Pricing/index';
import About from '../src/Components/About/index';
import Career from '../src/Components/Career/index';
import Login from '../src/Components/Login/index';
import Signup from '../src/Components/Signup/index';
import Store from '../src/Components/Store/index';
import AiStore from '../src/Components/AiStore/index';
import Block from './Components/Block/index';
import Extension from './Components/Extension/index';
import Policy from './Components/Policy/Index';
import Terms from './Components/Terms/Index';
import QuickGuide from './Components/QuickGuide/Index';
import Download from './Components/Download/Index';
import ForgetPassword from "./Components/Form/ForgetPassword";
import Payment from "../src/Components/Payment/Index";
import { loadStripe } from "@stripe/stripe-js";
import InstallPopup from './Components/InstallPopupModel/Index';
import NewFeatures from '../src/Components/NewFeatures/Index';
import { Elements } from "@stripe/react-stripe-js";
import ResetForm from "./Components/Form/ResetForm";

function App() {
    // theme state
    const [theme, setTheme] = useState({mode: ""});

    // Specicy Stripe Publishable API key here
    const promise = loadStripe("pk_test_51KVWA1IUStveJHR71NvSABEmUloxoEBCu9EVPcsHrEEvBVkHsHtfwIMbczNzEcQ64h40i86fsPoT3qljvR9yEMIp00p8ThpuH0");

    // // current user location data
    // const [longitude, setLongitude] = useState("");
    // const [latitude, setLatitude] = useState("");
    // const [userLocation, setUserLocation] = useState({
    //     country: "",
    //     place: "",
    //     temperature: "",
    //     weather: "",
    //     time_status: ""
    // })
    // const [timeStatus, setTime] = useState("");
    //
    // // convert the timestamp to local time
    // const convertTimeFormat = (timestamp) => {
    //     // store timestamp to string var
    //     const string = timestamp.toLocaleTimeString();
    //
    //     // split the hrs & status(am||pm) only
    //     const hrs = string.substr(0, 2);
    //     const status = string.substr(string.length - 2, string.length);
    //
    //     //determine day or night
    //     if ((hrs >= 6 && status === "PM") || (hrs <= 12 && hrs >= 6 && status === "AM")) {
    //         setTime("night")
    //     } else {
    //         setTime("day")
    //     }
    //
    //     //update the time status
    //     setTime(hrs + "" + status)
    // }

    // tract the user geolocation
    //tract the current user location
    // navigator.geolocation.getCurrentPosition(position => {
    //   const timestamp = new Date(position.timestamp);
    //   convertTimeFormat(timestamp);
    //   setLongitude(position.coords.longitude);
    //   setLatitude(position.coords.latitude);
    // });

    // track the state changes
    // useEffect(() => {
    //   if (latitude !== "" && longitude !== "") {
    //     // fetch the location using axios
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_MAP_KEY}&units=metric`)
    //       .then(res => {
    //         setUserLocation({
    //           country: res.data.sys.country,
    //           place: res.data.name,
    //           temperature: res.data.main.temp + " degree celcius",
    //           weather: res.data.weather[0].description,
    //           time_status: timeStatus
    //         })
    //       })
    //   }
    // }, [longitude, latitude]);


    //check theme on component rendered
    useEffect(() => {
        setTheme({mode:localStorage.getItem("theme")});
    }, []);

    //track the theme update using redux
    store.subscribe(() => setTheme({
        mode: store.getState().changeTheme === "unset" ?
            localStorage.getItem("theme"):store.getState().changeTheme
    }));

    return (
        <ThemeProvider theme={theme}>
            <>
                {
                    theme.mode === "dark" ? <DarkTheme/> : null
                }
                <Elements stripe={promise}>
                <div className="App">
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="Feature" element={<Feature/>}/>
                        <Route path="Pricing" element={<Pricing/>}/>
                        <Route path="About" element={<About/>}/>
                        <Route path="Career" element={<Career/>}/>
                        <Route path="Login" element={<Login/>}/>
                        <Route path="Signup" element={<Signup/>}/>
                        <Route path="Store" element={<Store/>}/>
                        <Route path="AiStore" element={<AiStore/>}/>
                        <Route path="Block" element={<Block/>}/>
                        <Route path="Extension" element={<Extension/>}/>
                        <Route path="Policy" element={<Policy/>}/>
                        <Route path="Terms" element={<Terms/>}/>
                        <Route path="QuickGuide" element={<QuickGuide/>}/>
                        <Route path="Download" element={<Download/>}/>
                        <Route path="Payment" element={<Payment/>}/>
                        <Route path="ForgetPassword" element={<ForgetPassword/>}/>
                        <Route path="InstallPopup" element={<InstallPopup/>}/>
                        <Route path="NewFeatures" element={<NewFeatures/>}/>
                        <Route path="ResetForm" element={<ResetForm/>}/>
                    </Routes>
                    <Footer/>
                </div>
                </Elements>
            </>
        </ThemeProvider>
    );
}

export default App;
