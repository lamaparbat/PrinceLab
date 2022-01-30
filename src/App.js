import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Components/Hompage/index';
import Navbar from '../src/Components/Navbar/Index';
import Footer from '../src/Components/Footer/index';
import axios from 'axios';

function App() {
  // current user location data
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [userLocation, setUserLocation] = useState({
    country: "",
    place: "",
    temperature: "",
    weather: "",
    time_status:""
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
    if (hrs >= 6 && status == "PM" || hrs <= 12 && hrs >= 6 && status == "AM") {
      setTime("night")
    } else {
      setTime("day")
    }

    //update the time status
    setTime(hrs + "" + status)
  }

  // weathermap api key
  const key = "e9d1627bffbc7cc590db1097ac22326c";

  // tract the user geolocation
  useEffect(() => {
    //tract the current user location 
    navigator.geolocation.getCurrentPosition(position => {
      const timestamp = new Date(position.timestamp);
      convertTimeFormat(timestamp);
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });

    // fetch the location using axios
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
      .then(res => {
        setUserLocation({
          country: res.data.sys.country,
          place: res.data.name,
          temperature: res.data.main.temp + "degree celcius",
          weather: res.data.weather[0].description,
          time_status: timeStatus
        })
        console.log(res.data)
      })
    
    console.log(userLocation)
  }, []);

  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* video banner */}
      <Homepage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
