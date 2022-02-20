import React from 'react';
import '../StoreIntro/index.css';

function index() {
  return (
   <div className='container-fluid storeIntro'>
    <img
     src={process.env.PUBLIC_URL + "/assets/AOW.svg"} />
    <img
     src={process.env.PUBLIC_URL + "/assets/store_icon_collect1.svg"} />
   </div>
  )
}

export default index