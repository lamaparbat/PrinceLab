import React from 'react';
import '../AiStore/index.css';
import Help from '../Store/Help/index';
import Collection from '../Store/Collection/index';
import Explore from '../Store/Explore/index';
import TopNav from '../Store/TopNav/index';

function index() {
 //discover comp data
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
 
 return (
  <div className='container aistore'>
   <TopNav /><br/>
   <div className='aistore_banner'>
    <div className='aistore_banner_content'>
     <h2>Join the movement</h2>
     <span>With the help of the AI apps we will be shaping the world in different aspects of field </span>
    </div>
   </div>
   <Help
    title="Start here"
    sub_title="Here are some AI apps to get you started"
    img1={process.env.PUBLIC_URL + "/assets/ai2.png"}
    img2={process.env.PUBLIC_URL + "/assets/ai3.png"}
    card_title="The Google Assistant. Get help anytime and anywhere"
    para="With a powerful Apple‑designed H1 chip in each cup, our custom acoustic design, and advanced software,
    AirPods Max use computational audio to create a breakthrough listening experience. By tapping into each 
    chip’s 10 audio cores, computational audio helps block outside noise, adapts audio to the fit and seal of 
    your ear cushions, and makes movie scenes sound like they’re happening all around you. With a powerful
    Apple‑designed H1 chip in each cup, our custom acoustic design, and"
   />
   <Collection
    title="Today’s top 50 AI apps"
    data={discoverData}
   />
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
    title="Learn a better way"
    data={discoverData}
   />
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