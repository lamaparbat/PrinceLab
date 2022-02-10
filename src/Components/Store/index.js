import React from 'react';
import '../Store/index.css';
import TopNav from '../Store/TopNav/index';
import StoreIntro from '../Store/StoreIntro/index';
import Discover from '../Store/Discover/index';

function index() {
  return (
   <div className='container-fluid store'>
    <TopNav />
    <StoreIntro />
    <Discover />
    {/* <Explore /> */}
    {/* <Creativity /> */}
    {/* <OneStep /> */}
    {/* <Help /> */}
   </div>
  )
}

export default index