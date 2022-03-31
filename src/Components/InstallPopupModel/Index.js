import React,{useState} from 'react';
import './Index.css';
import $ from 'jquery';
import InstallPopupNavbar from '../InstallPopupNavbar/Index';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


//custom input div
const InputComp = ({type}) => {
    return (
        <div className="input_div">
            {
                type === "Health" ?
                    <>
                        <h5>Recorded list</h5>
                        <div className="input_div_item mt-3">
                            <AudioFileOutlinedIcon className="p-2 icons"/>
                            <span>Audio_File1.png</span><br/>
                        </div>
                        <br/><br/>
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
                        <br/>
                        <button className="btn btn-primary w-100 rounded-2">Predict</button>
                    </> : null
            }
        </div>
    )
}

//custom result output component
const OutputComp = () => {
    return (
        <div className="input_div p-0">
            <h5 className={"bg-primary text-white p-2 px-3"} id="result_title">Result</h5>
            <div className="input_div_item mt-3 w-75 mx-4">
                <AudioFileOutlinedIcon className="p-2 icons"/>
                <span>Audio_File1.png</span><br/>
            </div>
            <br/><br/>
        </div>
    )
}

//bottom navbar
const InstallPopupBottomNavbar = ({ type }) => {
    const chooseImage = () => {
        $("#hidden_img").click();
    }
    
    const saveFileData = (event) => {
        const url = URL.createObjectURL(event.target.files[0])
        console.log(event.target.files[0])
        $(".discover_card_content .photoContainer #photo_icon").attr("src", url)
        
        //loading the image object into tf model
    }
    return (
        <div className="installBottomNav mb-5 w-100">
            {
                type === "Health" ?
                    <>
                        <div className={"rounded-pill btn mx-4 save p-2"}>
                            <SaveAltRoundedIcon className={"p-1 icons"}/>
                        </div>
                        <div className={"rounded-pill btn mic p-2"}>
                            <MicRoundedIcon className={"p-1 icons"}/>
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
                        <div className={"rounded-pill btn mx-4 save p-2"}>
                            <input type="file" className="d-none" id="hidden_img" onChange={saveFileData} />
                            <SaveAltRoundedIcon className={"p-1 icons"}
                                onClick={chooseImage}
                            />
                        </div>
                        <div className={"rounded-pill btn mic p-2"}>
                            <CameraAltOutlinedIcon className={"p-1 icons"}/>
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
                <InstallPopupNavbar/><br/><br/>
                {
                    data.title === "Health" ?
                        <>
                            <div className={"discover_card_content"}>
                                <InputComp type={data.title}/>
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/connector.png"}/>
                                <OutputComp/>
                            </div>
                            <br/>
                            <InstallPopupBottomNavbar  type={data.title}/>
                        </> : null
                }

                {
                    data.title === "Fusion" ?
                        <>
                            <div className={"discover_card_content"}>
                                <div className={"videoContainer"}>
                                    <VideocamOutlinedIcon id={"video_icon"}/>
                                </div>
                            </div>
                            <br/>
                            <InstallPopupBottomNavbar type={data.title}/>
                        </> : null
                }

                {/*{*/}
                {/*    data.title === "Goodnight" ?*/}
                {/*        <>*/}
                {/*            <div className={"discover_card_content"}>*/}
                {/*                <InputComp type={data.title}/>*/}
                {/*                <img*/}
                {/*                    src={process.env.PUBLIC_URL + "/assets/connector.png"}/>*/}
                {/*                <OutputComp/>*/}
                {/*            </div>*/}
                {/*            <br/>*/}
                {/*            <InstallPopupBottomNavbar type={data.title}/>*/}
                {/*        </> : null*/}
                {/*}*/}

                {
                    data.title === "Goodnight" ?
                        <>
                            <div className={"discover_card_content"}>
                                <div className={"photoContainer"}>
                                    <img src={process.env.PUBLIC_URL+"/assets/img_icon.png"} id={"photo_icon"}/>
                                </div>
                                <img
                                    src={process.env.PUBLIC_URL + "/assets/connector.png"}/>
                                <OutputComp/>
                            </div>
                            <br/>
                            <InstallPopupBottomNavbar type={"img_classification"}/>
                            <div className={"d-flex justify-content-end"}>
                                <button className={"btn px-5 save text-white rounded-3"}>Detect</button>
                            </div>
                        </> : null
                }
            </div>
        </div>
    )
}


export default Index;