import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Error from './Components/Error/Error';
import axios from 'axios';

function App() {
    // theme state
    const [theme, setTheme] = useState({ mode: "" });

    // Specify Stripe Publishable API key here
    const promise = loadStripe("pk_test_51KVWA1IUStveJHR71NvSABEmUloxoEBCu9EVPcsHrEEvBVkHsHtfwIMbczNzEcQ64h40i86fsPoT3qljvR9yEMIp00p8ThpuH0");

    
    
    //check theme on component rendered
    useEffect(() => {
        setTheme({ mode: localStorage.getItem("theme") });
    }, []);

    
    
    
    
    //track the theme update using redux
    store.subscribe(() => setTheme({
        mode: store.getState().changeTheme === "unset" ?
            localStorage.getItem("theme") : store.getState().changeTheme
    }));

    //scroll to top
    const topScroll = () => {
        alert("scroll")
    }

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
