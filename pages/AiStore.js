import React from 'react';
import Head from 'next/head';
import styles from '../styles/AiStore/index.module.css';
import Help from '../Components/AiStore/Store/Help/index';
import Collection from '../Components/AiStore/Store/Collection/index';
import Explore from '../Components/AiStore/Store/Explore/index';
import TopNav from '../Components/AiStore/Store/TopNav/index';

function index() {
    //discover comp data
    const discoverData = [
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
            title: "Health",
            sub_title: "Make your day better everybody",
            src: "/assets/heart.png"
        },
        {
            title: "Fusion",
            sub_title: "Make your day better everybody",
            src: "/assets/fusion.png"
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

    return (
        <div className={'container ' + styles.aistore}>
            <Head>
                <title>Princelab/Ai Store</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name='description'
                    content='Today’s top 50 AI apps. Learn how to use block on your project. Some help Here are some quick guides to get you started.Best extensions for Python, Top web extensions Education Learn a better way.'
                    key="desc"
                />
                <meta
                    name='keywords'
                    content='App Store, Ai Store, Block, Extension, Web, Python'
                />
                <meta name="author" content="Prince kumar singh" />
            </Head>
            <TopNav /><br />
            <div className={styles.aistore_banner}>
                <div className={styles.aistore_banner_content}>
                    <h2>Join the movement</h2>
                    <span>With the help of the AI apps we will be shaping the world in different aspects of field </span>
                </div>
            </div>
            <Help
                title="Start here"
                sub_title="Here are some AI apps to get you started"
                img1={"/assets/ai2.png"}
                img2={"/assets/ai3.png"}
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
                bg_src1={"/assets/agriculture.png"}
                bg_src2={"/assets/boston.png"}
                heading="Use for a cause"
                src1={"/assets/agriculture2.png"}
                title1="Agriculture"
                desc1="Cultivating the land with AI"
                id1="img1"
                src2={"/assets/boston2.png"}
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
                img1={"/assets/help_img.png"}
                img2={"/assets/store_help_block_img.png"}
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