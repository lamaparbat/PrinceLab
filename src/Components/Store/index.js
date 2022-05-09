import React, {useEffect} from 'react';
import '../Store/index.css';
import TopNav from '../Store/TopNav/index';
import StoreIntro from '../Store/StoreIntro/index';
import Collection from '../Store/Collection/index';
import Explore from '../Store/Explore/index';
import Help from '../Store/Help/index';
import $ from "jquery";

function Index() {
  //discover comp data
  const discoverData = [
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/heart.png"
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
      src:process.env.PUBLIC_URL + "/assets/fusion.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/fusion.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/fusion.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/night.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/night.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src:process.env.PUBLIC_URL + "/assets/night.png"
    }
  ];

  //auto scroll to the top when page rendered
  useEffect(() => {
    $(window).scrollTop({top: 0, behavior: "smooth"})
  }, [])

  return (
    <div className='container-fluid store'>
      <TopNav />
      <StoreIntro />
      <Collection
        title="Discover new apps"
        data={discoverData}
      />
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
      <Collection
        title="Creativity and Productivity"
        data={discoverData}
      />
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

export default Index