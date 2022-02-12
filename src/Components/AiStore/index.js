import React from 'react';
import '../AiStore/index.css';
import Help from '../Store/Help/index';

function index() {
 return (
  <div className='container aistore'>
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
  </div>
 )
}

export default index