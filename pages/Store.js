import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/AiStore/Store/index.module.css';
import TopNav from '../Components/AiStore/Store/TopNav/index';
import StoreIntro from '../Components/AiStore/Store/StoreIntro/index';
import Collection from '../Components/AiStore/Store/Collection/index';
import Explore from '../Components/AiStore/Store/Explore/index';
import Help from '../Components/AiStore/Store/Help/index';
import $ from "jquery";

function Index() {
  //discover comp data
  const discoverData = [
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src:"/assets/heart.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src: "/assets/heart.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src: "/assets/heart.png"
    },
    {
      title: "Fusion",
      sub_title: "Make your day better everybody",
      src:"/assets/fusion.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src: "/assets/fusion.png"
    },
    {
      title: "Health",
      sub_title: "Make your day better everybody",
      src: "/assets/fusion.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src: "/assets/night.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src: "/assets/night.png"
    },
    {
      title: "Goodnight",
      sub_title: "Make your day better everybody",
      src: "/assets/night.png"
    }
  ];

  //auto scroll to the top when page rendered
  useEffect(() => {
    $(window).scrollTop({top: 0, behavior: "smooth"})
  }, [])

  return (
    <div className={'container-fluid ' + styles.store}>
      <Head>
        <title>Princelab/ Store</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name='description'
          content='Languages we ought to simplify.Simplest Environment.Make your work More easier.To learn how to use paradox, we have some quick guide for you to get started.Princelab Prncelab
Princlab Pincelab Princela Pricelab Princelav Princlab Pincelab Prncelab Princelab website 
Prince singh of princelab Ceo of princelab About princelab Paradox  Pardox Princelab paradox  What is paradox  Paradox price Paradox subscription Princelab login
Princelab signup Princelab features  Princelab career Princelab job Princelab requirements  Princelab application Princelab student pricing  Princelab vision'
          key="desc"
        />
        <meta
          name='keywords'
          content='Languages, Environment, Premium, Downloads,Quickguide, Service, Follow, Company, Information,Princelab
,Prncelab,Princlab,Pincelab,Princela,Pricelab,Princelav
,Princlab
,Pincelab
,Prncelab
,Princelab,
website 
,Prince
,singh
,Ceo
,About 
,Paradox 
,Pardox
,pricing
,subscription 
,login
,signup
,features 
,career
,job
,Princelab ,vision,
IT,Company'
        />
        <meta name="author" content="Prince kumar singh" />
      </Head>
      <TopNav />
      <StoreIntro />
      <Collection
        title="Discover new apps"
        data={discoverData}
      />
      <Explore
        bg_src1={ "/assets/map.png"}
        bg_src2={ "/assets/tour.png"}
        heading="Explore the world"
        src1={ "/assets/earth.png"}
        title1="Google Earth"
        desc1="Explore the world"
        id1="img1"
        src2={ "/assets/plane.png"}
        title2="World Tour"
        desc2="Visit any country and make you life better"
        id2="img2"
      />
      <Collection
        title="Creativity and Productivity"
        data={discoverData}
      />
      <Explore
        bg_src1={ "/assets/space.png"}
        bg_src2={ "/assets/curiosity.png"}
        heading="One step towards the future"
        src1={ "/assets/black_moon.png"}
        title1="Discover the moon"
        desc1="Explore the moon virtuality"
        id1="img1"
        src2={ "/assets/grey_moon.png"}
        title2="Mars with rover"
        desc2="Visit the next habitat of humankind with rover"
        id2="img2"
      />
      <Help
        title="Some help"
        sub_title="Here are some quick guides to get you started"
        img1={ "/assets/help_img.png"}
        img2={ "/assets/store_help_block_img.png"}
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