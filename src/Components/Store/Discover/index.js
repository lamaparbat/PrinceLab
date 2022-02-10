import React from 'react';
import '../Discover/index.css';

// app card
const AppCard = ({url, title, desc}) => {
 return (
  <div className='discover_apps_card'>
   <img
    id='icons'
    loading='lazy'
    src={url} />
   <div className='discover_apps_card_content'>
    <h5>{title}</h5>
    <p>{desc}</p><br/>
    <button className='btn btn-primary py-0 px-4'>Get</button>
   </div>
  </div> 
)
}

function index() {
  return (
   <div className='container-fluid py-3 discover'>
    <div className='container'>
     <h2 className='my-3 text-star' id='discover_title'>Discover new apps</h2>
    </div>
    <div className='container-fluid discover_apps'>
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/heart.png"}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/heart.png"}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/heart.png"}
      title={"Health"}
      desc={"Make your day better"}
     />
    </div><br/>
    <div className='container-fluid discover_apps'>
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/fusion.png"}
      title={"Fusion"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/fusion.png"}
      title={"Fusion"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/fusion.png"}
      title={"Fusion"}
      desc={"Make your day better"}
     />

    </div><br/>
    <div className='container-fluid discover_apps'>
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/night.png"}
      title={"Goodnight"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/night.png"}
      title={"Goodnight"}
      desc={"Make your day better"}
     />
     <AppCard
      url={process.env.PUBLIC_URL + "/assets/night.png"}
      title={"Goodnight"}
      desc={"Make your day better"}
     />
    </div>
   </div>
  )
}

export default index