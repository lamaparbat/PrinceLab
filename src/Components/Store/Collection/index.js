import React, { useState, useEffect } from 'react';
import '../Collection/index.css';
import { useDispatch, useSelector } from "react-redux";
import { openInstallModel } from '../../../Redux/Actions/index';
import InstallPopup from '../../InstallPopupModel/Index.js';
import $ from 'jquery';
import Dexie from 'dexie';

// app card
const AppCard = ({ id, url, title, desc, isInstall }) => {
    //loading data
    const [isLoading, setLoading] = useState(false);

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
    const installModel = async (url, title, desc, e) => {
        //disbaling the install button
        const cardBtnID = e.target.id;
        $(".discover_apps_card_content #" + cardBtnID).prop("disabled", true)
        setLoading(true);

        //installing model

        //uploading model into indexDB
        const indexDB = new Dexie("princelabModel");
        indexDB.version(1).stores({
            Model: "name, file"
        })
        try {
            await indexDB.Model.add({
                name: "Image Classification",
                file: {
                    type: "blob",
                    size: "13kb"
                }
            });
            const storedModelData = await indexDB.Model.toArray();
            
            //set off the loading & remove disable mode
            setLoading(false);
            $(".discover_apps_card_content #" + cardBtnID).prop("disabled", false);
            
            
            //open modal
            openModal(url, title, desc);
            
        } catch (error) {
            //set off the loading & remove disable mode
            setLoading(false);
            $(".discover_apps_card_content #" + cardBtnID).prop("disabled", false);
            
            console.log(error)
        }
    }


    return (
        <div className='discover_apps_card'>
            <img
                id='icons'
                loading='lazy'
                src={url} />
            <div className='discover_apps_card_content'>
                <h5>{title}</h5>
                <p>{desc}</p><br />
                <button
                    onClick={(e) => installModel(url, title, desc, e)}
                    className={'btn btn-primary py-0 px-3 h6 '} id={id} >
                    {
                        isLoading ? "Installing....." :null
                    }
                    {
                        isInstall ? "Uninstall":"Install"
                    }
                </button>
            </div>
        </div>
    )
}

function Index({ title, data }) {
    const [indexDB_Data, setIndexDB_Data] = useState({});
    //track the installed model
    useEffect(() => {
        const fetchIndexDB_DATA = async () => {
            const indexDB = new Dexie("princelabModel")
            indexDB.version(1).stores({
                Model: "name, file"
            })
            const data = await indexDB.Model.toArray();
            setIndexDB_Data(data);
            console.log(indexDB_Data[0].name)
        }
        fetchIndexDB_DATA();
    }, [])
    
    // fetch the redux store InstallModel Value
    const modelData = useSelector(state => state.installModelVisible);

    return (
        <div className='container py-3 discover'>
            <div className='container'>
                {
                    title === "Learn a better way" ?
                        <span className='text-primary fw-bold' id='discover_title'
                            style={{ top: "5px", position: "relative" }}>Education</span> :
                        null
                }
                {
                    title === "Top web extensions" ?
                        <span className='text-primary fw-bold' id='discover_title'
                            style={{ top: "5px", position: "relative" }}>Web development</span> :
                        null
                }
                <h2 className='my-3 text-star' id='discover_title'>{title}</h2>
            </div>
            <div className='container-fluid discover_apps'>
                <AppCard
                    id="card1"
                    url={data[0].src}
                    title={"Health"}
                    desc={"Make your day better"}
                    isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true: false}
                />
                <AppCard
                    id="card2"
                    url={data[1].src}
                    title={"Health"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
                <AppCard
                    id="card3"
                    url={data[2].src}
                    title={"Toxic"}
                    desc={"Detects whether text contains toxic content "}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
            </div>
            <br />
            <div className='container-fluid discover_apps'>
                <AppCard
                    id="card4"
                    url={data[3].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
                <AppCard
                    id="card5"
                    url={data[4].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
                <AppCard
                    id="card6"
                    url={data[5].src}
                    title={"Fusion"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />

            </div>
            <br />
            <div className='container-fluid discover_apps'>
                <AppCard
                    id="card7"
                    url={data[6].src}
                    title={"Image Classification"}
                    desc={"Predict the choosen or captured image"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
                <AppCard
                    id="card8"
                    url={data[7].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
                />
                <AppCard
                    id="card9"
                    url={data[8].src}
                    title={"Goodnight"}
                    desc={"Make your day better"}
                    // isInstall={indexDB_Data.length != 0 && indexDB_Data[0].name === "Image Classification" ? true : false}
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

export default Index