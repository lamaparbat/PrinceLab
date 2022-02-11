import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Components/Hompage/index';
import Navbar from '../src/Components/Navbar/index';
import Footer from '../src/Components/Footer/index';
import Feature from '../src/Components/Feature/index';
import Pricing from '../src/Components/Pricing/index';
import About from '../src/Components/About/index';
import Career from '../src/Components/Career/index';
import Login from '../src/Components/Login/index';
import Store from '../src/Components/Store/index';

function App() {
  // current user location data
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [userLocation, setUserLocation] = useState({
    country: "",
    place: "",
    temperature: "",
    weather: "",
    time_status: ""
  })
  const [timeStatus, setTime] = useState("");

  // convert the timestamp to local time
  const convertTimeFormat = (timestamp) => {
    // store timestamp to string var
    const string = timestamp.toLocaleTimeString();

    // split the hrs & status(am||pm) only
    const hrs = string.substr(0, 2);
    const status = string.substr(string.length - 2, string.length);

    //determine day or night
    if ((hrs >= 6 && status === "PM") || (hrs <= 12 && hrs >= 6 && status === "AM")) {
      setTime("night")
    } else {
      setTime("day")
    }

    //update the time status
    setTime(hrs + "" + status)
  }

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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Feature" element={<Feature />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="About" element={<About />} />
        <Route path="Career" element={<Career />} />
        <Route path="Login" element={<Login />} />
        <Route path="Store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
