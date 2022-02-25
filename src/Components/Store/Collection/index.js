import React, {useState} from 'react';
import '../Collection/index.css';
import {useDispatch, useSelector} from "react-redux";
import {openInstallModel} from '../../../Redux/Actions/index';
import InstallPopup from '../../InstallPopup/Index.js';

// app card
const AppCard = ({url, title, desc}) => {
    //create instance of useDispatch
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(openInstallModel(true))
    }

    return (
        <div className='discover_apps_card'>
            <img
                id='icons'
                loading='lazy'
                src={url}/>
            <div className='discover_apps_card_content'>
                <h5>{title}</h5>
                <p>{desc}</p><br/>
                <button
                    onClick={openModal}
                    className='btn btn-primary py-0 px-4'>Get
                </button>
            </div>
        </div>
    )
}

function Index({title, data}) {
    // fetch the redux store InstallModel Value
    const model_visible = useSelector(state => state.installModelVisible);

    return (
        <div className='container-fluid py-3 discover'>
            <div className='container'>
                {
                    title === "Learn a better way" ?
                        <span className='text-primary fw-bold' id='discover_title'
                              style={{top: "5px", position: "relative"}}>Education</span> :
                        null
                }
                {
                    title === "Top web extensions" ?
                        <span className='text-primary fw-bold' id='discover_title'
                              style={{top: "5px", position: "relative"}}>Web development</span> :
                        null
                }
                <h2 className='my-3 text-star' id='discover_title'>{title}</h2>
            </div>
            <div className='container-fluid discover_apps'>
                <AppCard
                    url={data[0].src}
                    title={"Health"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[1].src}
                    title={"Health"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[2].src}
                    title={"Health"}
                    desc={"Make your day better"}
                />
            </div>
            <br/>
            <div className='container-fluid discover_apps'>
                <AppCard
                    url={data[3].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[4].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[5].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                />

            </div>
            <br/>
            <div className='container-fluid discover_apps'>
                <AppCard
                    url={data[6].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[7].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                />
                <AppCard
                    url={data[8].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                />
            </div>
            {
                model_visible ?  <InstallPopup />:null
            }
        </div>
    )
}

export default Index