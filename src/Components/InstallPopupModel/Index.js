import React, { useState, useEffect, useRef } from 'react';
import './Index.css';
import $ from 'jquery';
import InstallPopupNavbar from '../InstallPopupNavbar/Index';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import * as mobilenet from '@tensorflow-models/mobilenet';
import Webcam from 'react-webcam';

//custom input div
const InputComp = ({ type }) => {
    return (
        <div className="input_div">
            {
                type === "Health" ?
                    <>
                        <h5>Recorded list</h5>
                        <div className="input_div_item mt-3">
                            <AudioFileOutlinedIcon className="p-2 icons" />
                            <span>Audio_File1.png</span><br />
                        </div>
                        <br /><br />
                        <button className="btn btn-primary w-100 rounded-2">Predict</button>
                    </> : null
            }
            {
                type === "Goodnight" ?
                    <>
                        <h5 className={"mb-4"}>Features</h5>
                        <span>Number of rooms</span>
                        <input
                            type={"number"}
                            className={"form-control"}
                            id={"number"}
                        />
                        <span id={"predict_input_title"}>Area</span>
                        <input
                            type={"text"}
                            className={"form-control"}
                            id={"area"}
                        />
                        <span id={"predict_input_title"}>Location</span>
                        <input
                            type={"text"}
                            className={"form-control"}
                            id={"location"}
                        />
                        <br />
                        <button className="btn btn-primary w-100 rounded-2">Predict</button>
                    </> : null
            }
        </div>
    )
}

//custom result output component
const OutputComp = () => {
    return (
        <div className="input_div p-0 d-flex flex-column align-items-center">
            <h5 className={"bg-primary text-white p-2 px-3 position-relative"} id="result_title">Result</h5>
            <div className="input_div_item d-flex flex-column p-2 mt-3 w-75">
                <span><b>Name:</b> <font id="name"></font></span>
                <span><b>Probability:</b> <font id="probab"></font></span>
            </div>
            <br /><br />
        </div>
    )
}

//bottom navbar
const InstallPopupBottomNavbar = ({ type }) => {
    const [isLoading, setLoading] = useState(false);
    const camData = useRef()
    const [isWebCamOpen, setWebCamOpen] = useState(false);

    useEffect(() => {
        if (isLoading) {
            console.log("loading start")
            $(".predictButton").prop("disabled", true);
        } else {
            console.log("loading stop")
            $(".predictButton").prop("disabled", false);
        }
    }, [isLoading]);

    //auto click image picker (<input type=file />)
    const chooseImage = () => {
        $("#hidden_img").click();
    }

    //after choosing file
    const saveFileData = async (event) => {
        const url = URL.createObjectURL(event.target.files[0])
        $(".discover_card_content .photoContainer #photo_icon").attr("src", url)

        //loading the image object into tf model
        try {
            const model = await mobilenet.load()
            const results = await model.classify(document.querySelector(".discover_card_content .photoContainer #photo_icon"));
            if (results) {
                //percentage conversion
                const percentage = Math.round(results[0].probability * 100)

                $(".input_div_item #name").text(results[0].className)
                $(".input_div_item #probab").text(percentage + "%")
            }
        } catch (error) {
            console.log(error)
        }
    }

    //capture photo
    const capturePhoto = async() => {
        const image = camData.current.getScreenshot();

        //fit the image to box
        $(".discover_card_content .photoContainer #photo_icon").attr("src", image)
        
        //hide the camera
        setWebCamOpen(false);
        
        //loading the image object into tf model
        try {
            const model = await mobilenet.load()
            const results = await model.classify(document.querySelector(".discover_card_content .photoContainer #photo_icon"));
            if (results) {
                //percentage conversion
                const percentage = Math.round(results[0].probability * 100)
                console.log(results)
                $(".input_div_item #name").text(results[0].className)
                $(".input_div_item #probab").text(percentage + "%")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={isWebCamOpen ? "installBottomNav mb-5 w-100 d-flex flex-column justify-content-center align-items-center" : "installBottomNav mb-5 w-100"}>
            {
                isWebCamOpen ? <Webcam ref={camData} /> : null
            }
            {
                type === "Health" ?
                    <>
                        <div className={"rounded-pill btn mx-4 save p-2"}>
                            <SaveAltRoundedIcon className={"p-1 icons"} />
                        </div>
                        <div className={"rounded-pill btn mic p-2"}>
                            <MicRoundedIcon className={"p-1 icons"} />
                        </div>
                    </> : null
            }
            {
                type === "Fusion" ?
                    <>
                        <div className={"rounded-3 btn mx-4 save px-5 py-2"}>
                            Start
                        </div>
                        <div className={"rounded-3 btn bg-danger mx-4 px-5 py-2"}>
                            Stop
                        </div>
                    </> : null
            }
            {
                type === "img_classification" ?
                    <>
                        <div className={isWebCamOpen ? "d-none" : "rounded-pill btn mx-4 save p-2"}>
                            <input type="file" className="d-none" id="hidden_img" onChange={saveFileData} />
                            <SaveAltRoundedIcon className={"p-1 icons"}
                                onClick={chooseImage}
                            />
                        </div>
                        <div className={isWebCamOpen ? "rounded-pill btn mic mx-5 my-2" : "rounded-pill btn mic p-2"} onClick={capturePhoto}>
                            {
                                isWebCamOpen ? " Capture Photo " :
                                    <CameraAltOutlinedIcon
                                        className={"p-1 icons"}
                                        onClick={() => isWebCamOpen ? setWebCamOpen(false) : setWebCamOpen(true)}
                                    />
                            }
                        </div>
                    </> : null
            }
        </div>
    )
}

const Index = ({ data }) => {
    return (
        <div className="container-fluid install_discover py-5">
            <div className="install_discover_card">
                <InstallPopupNavbar /><br /><br />
                {
                    data.title === "Health" ?
                        <>
                            <div className={"discover_card_content"}>
                                <InputComp type={data.title} />
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/connector.png"} />
                                <OutputComp />
                            </div>
                            <br />
                            <InstallPopupBottomNavbar type={data.title} />
                        </> : null
                }

                {
                    data.title === "Fusion" ?
                        <>
                            <div className={"discover_card_content"}>
                                <div className={"videoContainer"}>
                                    <VideocamOutlinedIcon id={"video_icon"} />
                                </div>
                            </div>
                            <br />
                            <InstallPopupBottomNavbar type={data.title} />
                        </> : null
                }

                {/* {
                    data.title === "Goodnight" ?
                        <>
                            <div className={"discover_card_content"}>
                                <InputComp type={data.title} />
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/connector.png"} />
                                <OutputComp />
                            </div>
                            <br />
                            <InstallPopupBottomNavbar type={data.title} />
                        </> : null
                } */}

                {
                    data.title === "Goodnight" ?
                        <>
                            <div className={"discover_card_content"}>
                                <div className={"photoContainer"}>
                                    <img src={process.env.PUBLIC_URL + "/assets/img_icon.png"} id={"photo_icon"} />
                                </div>
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/connector.png"} />
                                <OutputComp />
                            </div>
                            <br />
                            <InstallPopupBottomNavbar type={"img_classification"} />
                        </> : null
                }
                {/* <div className={"ml-5 d-flex justify-content-end"}>
                    <button
                        className={"btn px-5 save text-white rounded-3 predictButton"}
                    >Detect</button>
                </div> */}
            </div>
        </div>
    )
}


export default Index;