import React from 'react';
import styles from '../styles/AiStore/Block/index.module.css';
import Help from '../Components/AiStore/Store/Help/index';
import Collection from '../Components/AiStore/Store/Collection/index';
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
        <div className={'container '+styles.block}>
            <TopNav /><br />
            <div className={styles.block_banner}>
                <img
                    src={ "/assets/block_img1.png"} />
                <img
                    src={ "/assets/extension_img1.png"} />
            </div>
            <div className={styles.tensorflow_cont}>
                <img
                    id={styles["tensorflow_img"]}
                    src={ "/assets/block_tensorflow.png"} />
                <div className={styles.tensorflow_cont_title}>
                    <h3 className='fw-bold'>Tensorflow</h3>
                    <h3 className='fw-bold'>Block</h3>
                </div>
            </div>
            <Collection
                title="Today’s top 50 AI apps"
                data={discoverData}
            />
            <br/><hr /><br/>
            <Collection
                title="Learn a better way"
                data={discoverData}
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

export default index