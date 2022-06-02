import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import store from './Store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from "./Theme";
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
import AiPreview from '../src/Components/AiPreview/index';
import Error from './Components/Error/Error';
import StudentRegistrationForm from '../src/Components/StudentRegistrationForm';
import StudentPlan from '../src/Components/StudentPlan'
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { Secret } from '../src/secret';

function App() {
    // theme state
    const [theme, setTheme] = useState({ mode: "" });

    //navigation instance
    const navigate = useNavigate();

    const [userCache, setUserCache] = useState({
        email: "",
        profile: "",
        username: "",
        mode: ""
    });

    // Specify Stripe Publishable API key here
    const promise = loadStripe("pk_test_51KVWA1IUStveJHR71NvSABEmUloxoEBCu9EVPcsHrEEvBVkHsHtfwIMbczNzEcQ64h40i86fsPoT3qljvR9yEMIp00p8ThpuH0");

    //check theme on component rendered
    useEffect(() => {
        setTheme({ mode: localStorage.getItem("theme") });
        try {
            //fetch the user cache 
            const bytes = CryptoJS.AES.decrypt(localStorage.getItem("princelab"), Secret());
            const originalSession = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setUserCache(originalSession);
        } catch (error) {
            navigate("/Login")
        }

    }, []);

    //track the theme update using redux
    store.subscribe(() => setTheme({
        mode: store.getState().changeTheme === "unset" ?
            localStorage.getItem("theme") : store.getState().changeTheme
    }));

    return (
        <ThemeProvider theme={theme}>
            <>
                {
                    theme.mode === "dark" ? <DarkTheme /> : null
                }
                <Elements stripe={promise}>
                    <div className="App">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="Feature" element={<Feature />} />
                            <Route path="Pricing" element={<Pricing />} />
                            <Route path="About" element={<About />} />
                            <Route path="Career" element={<Career />} />
                            <Route path="Login" element={<Login />} />
                            <Route path="Signup" element={<Signup />} />
                            <Route path="Store" element={<Store />} />
                            <Route path="AiStore" element={<AiStore />} />
                            <Route path="Block" element={<Block />} />
                            <Route path="Extension" element={<Extension />} />
                            <Route path="Policy" element={<Policy />} />
                            <Route path="Terms" element={<Terms />} />
                            <Route path="QuickGuide" element={<QuickGuide />} />
                            <Route path="Download" element={<Download />} />
                            <Route path="Payment" element={<Payment />} />
                            <Route path="ForgetPassword" element={<ForgetPassword />} />
                            <Route path="InstallPopup" element={<InstallPopup />} />
                            <Route path="NewFeatures" element={<NewFeatures />} />
                            <Route path="ResetForm" element={<ResetForm />} />
                            <Route path="AiPreview" element={<AiPreview />} />
                            <Route path="StudentRegistrationForm" element={<StudentRegistrationForm />} />
                            <Route path="StudentPlan" element={<StudentPlan />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                        <Footer />
                    </div>
                </Elements>
            </>
        </ThemeProvider>
    );
}

export default App;
