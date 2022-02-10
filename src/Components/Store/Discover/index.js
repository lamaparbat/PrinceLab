import React from 'react';
import '../Discover/index.css';

// app card
const AppCard = () => {
 return (
  <div className='discover_apps_card'>
   <img
    id='icons'
    loading='lazy'
    src={process.env.PUBLIC_URL + "/assets/facebook.png"} />
   <div className='discover_apps_card_content'>
    <h5>Health</h5>
    <p>Make your day better</p><br/>
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
     <AppCard />
     <AppCard />
     <AppCard />
    </div><br/>
    <div className='container-fluid discover_apps'>
     <AppCard />
     <AppCard />
     <AppCard />
    </div><br/>
    <div className='container-fluid discover_apps'>
     <AppCard />
     <AppCard />
     <AppCard />
    </div>
   </div>
  )
}

export default index