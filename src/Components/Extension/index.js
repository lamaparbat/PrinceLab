import React from 'react';
import TopNav from '../Store/TopNav/index';
import '../Extension/index.css';
import Explore from '../Store/Explore/index';
import Collection from '../Store/Collection/index';
import Help from '../Store/Help/index';
import { width } from '@mui/system';

function index() {
 // data
 const discoverData = [
  {
   title: "Health",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/heart.png"
  },
  {
   title: "Health",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/heart.png"
  },
  {
   title: "Health",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/heart.png"
  },
  {
   title: "Fusion",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/fusion.png"
  },
  {
   title: "Health",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/fusion.png"
  },
  {
   title: "Health",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/fusion.png"
  },
  {
   title: "Goodnight",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/night.png"
  },
  {
   title: "Goodnight",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/night.png"
  },
  {
   title: "Goodnight",
   sub_title: "Make your day better everybody",
   src: process.env.PUBLIC_URL + "/assets/night.png"
  }
 ];

 // custom card box
 const CardBox = ({ url, title, desc }) => {
  return (
   <div
    className='card_box'
    style={{
     backgroundImage: `url(${url})`,
     backgroundSize: "100% 100%",
     backgroundRepeat: "no-repeat"
    }}
   >
    <div className='card_box_content'>
     <h3>{title}</h3>
     <span>{desc}</span>
    </div>
   </div>
  )
 }
 
 
 // custom app card
 // app card
 const AppCard = ({ url, title, desc }) => {
  return (
   <div className='extension_apps_card'>
    <img
     id='icons'
     loading='lazy'
     src={url} />
    <div className='extension_apps_card_content'>
     <h5>{title}</h5>
     <p>{desc}</p><br />
     <button className='btn btn-primary py-0 px-4'>Get</button>
    </div>
   </div>
  )
 }

 // custom extension type card
 const ExtensionType = () => {
  return (
   <div className='container extension_type'>
    <div className='python_ext'>
     <span>Programming</span>
     <h3>Best extensions for Python</h3>
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
    </div>
    <div className='tensorflow_ext'>
     <span>Machine Learning</span>
     <h3>TensorFlow extensions</h3>
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
     <AppCard
      url={discoverData[0].src}
      title={"Health"}
      desc={"Make your day better"}
     />
    </div>
   </div>
)
 }

 return (
  <div className='container extension'>
   <TopNav />
   <div className="row py-3">
    <div className='col-6'>
     <CardBox
      url={process.env.PUBLIC_URL + "/assets/extension_img1.png"}
      title="Flutter"
      desc="Create your app for every platform"
     /><br />
     <CardBox
      url={process.env.PUBLIC_URL + "/assets/extension_img2.png"}
      title="Tenserflow"
      desc="With the help of the AI apps we will be shaping the world in different aspects of field"
     />
    </div>
    <div className='col-5 p-0'>
     <CardBox
      url={process.env.PUBLIC_URL + "/assets/extension_img3.png"}
      title="Build your website"
      desc="With the help of the AI apps we will be shaping the world in different aspects of field "
     />
    </div>
   </div>

   <Explore
    bg_src1={process.env.PUBLIC_URL + "/assets/agriculture.png"}
    bg_src2={process.env.PUBLIC_URL + "/assets/boston.png"}
    heading="Use for a cause"
    src1={process.env.PUBLIC_URL + "/assets/agriculture2.png"}
    title1="Agriculture"
    desc1="Cultivating the land with AI"
    id1="img1"
    src2={process.env.PUBLIC_URL + "/assets/boston2.png"}
    title2="Boston Dynamics"
    desc2="Finding clues anywhere "
    id2="img2"
   />

   <Collection
    title="Top web extensions"
    data={discoverData}
   />
   
   <br />
   <br />
   
  <ExtensionType />

   <br />
   <br />
   <br />
   
   <Help
    title="Some help"
    sub_title="Here are some quick guides to get you started"
    img1={process.env.PUBLIC_URL + "/assets/help_img.png"}
    img2={process.env.PUBLIC_URL + "/assets/store_help_block_img.png"}
    card_title="Learn how to use block on your project"
    para=" With a powerful Apple‑designed H1 chip in each cup, our custom acoustic design, and advanced software,
                AirPods Max use computational audio to create a breakthrough listening experience. By tapping into each
                chip’s 10 audio cores, computational audio helps block outside noise, adapts audio to the fit and seal of
                your ear cushions, and makes movie scenes sound like they’re happening all around you. With a powerful
                Apple‑designed H1 chip in each cup, our custom acoustic design, and"
   />
  </div>
 )
}

export default index