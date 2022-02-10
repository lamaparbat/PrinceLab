import React from 'react';
import '../Store/index.css';
import TopNav from '../Store/TopNav/index';
import StoreIntro from '../Store/StoreIntro/index';
import Collection from '../Store/Discover/index';
import Explore from '../Store/Explore/index';

function index() {
  return (
   <div className='container-fluid store'>
    <TopNav />
    <StoreIntro />
    <Collection />
    <Explore
     bg_src1={process.env.PUBLIC_URL + "/assets/map.png"}
     bg_src2={process.env.PUBLIC_URL + "/assets/tour.png"}
     heading="Explore the world"
     src1={process.env.PUBLIC_URL + "/assets/earth.png"}
     title1="Google Earth"
     desc1="Explore the world"
     id1="img1"
     src2={process.env.PUBLIC_URL + "/assets/plane.png"}
     title2="World Tour"
     desc2="Visit any country and make you life better"
     id2="img2"
    />
    <Collection />
    <Explore
     bg_src1={process.env.PUBLIC_URL + "/assets/space.png"}
     bg_src2={process.env.PUBLIC_URL + "/assets/curiosity.png"}
     heading="One step towards the future"
     src1={process.env.PUBLIC_URL + "/assets/black_moon.png"}
     title1="Discover the moon"
     desc1="Explore the moon virtuality"
     id1="img1"
     src2={process.env.PUBLIC_URL + "/assets/grey_moon.png"}
     title2="Mars with rover"
     desc2="Visit the next habitat of humankind with rover"
     id2="img2"
    />
    {/* <Creativity /> */}
    {/* <OneStep /> */}
    {/* <Help /> */}
   </div>
  )
}

export default index