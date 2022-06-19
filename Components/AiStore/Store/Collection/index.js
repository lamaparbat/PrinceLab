import React, { useState } from 'react';
import styles from '../../../../styles/AiStore/Store/Collection/index.module.css';
import { useDispatch, useSelector } from "react-redux";
import { openInstallModel } from '../../../../Redux/Actions/index';
import InstallPopup from '../../InstallPopupNavbar/Index';

// app card
const AppCard = ({ id, url, title, desc, isInstall }) => {
    //loading data
    const [isLoading, setLoading] = useState(false);
    const [isInstallModel, setInstallModel] = useState(false);


    //create instance of useDispatch
    const dispatch = useDispatch()

    //open model
    const openModal = (url, title, desc) => {
        const data = {
            url: url,
            title: title,
            desc: desc
        }
        dispatch(openInstallModel(data))
    }
    
    //install model
    const installModel = (e) => {
    }
    
    return (
        <div className={styles.discover_apps_card}>
            <img
                id={styles["icons"]}
                loading='lazy'
                src={url} />
            <div className={styles.discover_apps_card_content}>
                <h5>{title}</h5>
                <p>{desc}</p><br />
                <button
                    onClick={isInstall ? uninstallModel : (e) => installModel(e)}
                    className={'btn btn-primary py-0 px-3 h6 '} id={id} >
                    {
                        isLoading ? "Installing....." : null
                    }
                    {
                        isInstallModel ? "Uninstall" : "Install"
                    }
                </button>
            </div>
        </div>
    )
}

function Index({ title, data }) {
    // fetch the redux store InstallModel Value
    const modelData = useSelector(state => state.installModelVisible);

    return (
        <div className={'container py-3 ' + styles.discover}>
            <div className='container'>
                {
                    title === "Learn a better way" ?
                        <span className='text-primary fw-bold' id={styles["discover_title"]}
                            style={{ top: "5px", position: "relative" }}>Education</span> :
                        null
                }
                {
                    title === "Top web extensions" ?
                        <span className='text-primary fw-bold' id={styles["discover_title"]}
                            style={{ top: "5px", position: "relative" }}>Web development</span> :
                        null
                }
                <h2 className='my-3 text-star' id={styles["discover_title"]}>{title}</h2>
            </div>
            <div className={'container-fluid ' + styles.discover_apps}>
                <AppCard
                    id={"card1"}
                    url={data[0].src}
                    title={"Health"}
                    desc={"Make your day better"}
                />
                <AppCard
                    id={"card2"}
                    url={data[1].src}
                    title={"Health"}
                    desc={"Make your day better"}
                />
                <AppCard
                    id={"card3"}
                    url={data[2].src}
                    title={"Toxic"}
                    desc={"Detects whether text contains toxic content "}
                />
            </div>
            <br />
            <div className={'container-fluid ' + styles.discover_apps}>
                <AppCard
                    id={"card4"}
                    url={data[3].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />
                <AppCard
                    id={"card5"}
                    url={data[4].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />
                <AppCard
                    id={"card6"}
                    url={data[5].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />

            </div>
            <br />
            <div className={'container-fluid '+styles.discover_apps}>
                <AppCard
                    id={"card7"}
                    url={data[6].src}
                    title={"Image Classification"}
                    desc={"Predict the choosen or captured image"}
                />
                <AppCard
                    id={"card8"}
                    url={data[7].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                />
                <AppCard
                    id={"card9"}
                    url={data[8].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                />
            </div>
            {
                modelData.show ?
                    <InstallPopup
                        data={modelData}
                    />
                    : null
            }
        </div>
    )
}

export default Index;