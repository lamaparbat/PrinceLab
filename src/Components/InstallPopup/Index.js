import React from 'react';
import '../InstallPopup/Index.css';
import InstallPopupNavbar from '../InstallPopupNavbar/Index';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';

//custom input div
const InputComp = () => {
    return(
        <div className="input_div">
            <h5>Recorded list</h5>
            <div className="input_div_item mt-3">
                <AudioFileOutlinedIcon className="p-2" />
                <span>Audio_File1.png</span><br />
            </div><br/><br />
            <button className="btn btn-primary w-100 rounded-2">Predict</button>
        </div>
    )
}

//custom result output component
const OutputComp = () => {
    return(
        <div className="input_div p-0">
            <h5 className={"bg-primary text-white p-2 px-3"} id="result_title">Result</h5>
            <div className="input_div_item mt-3 w-75 mx-4">
                <AudioFileOutlinedIcon className="p-2" />
                <span>Audio_File1.png</span><br />
            </div><br/><br />
        </div>
    )
}

//bottom navbar
const  InstallPopupBottomNavbar = () => {
    return(
        <div className="installBottomNav mb-5 w-100">
           <div className={"rounded-pill btn mx-4 save p-2"}>
               <SaveAltRoundedIcon className={"p-1"} />
           </div>
            <div className={"rounded-pill btn mic p-2"}>
                <MicRoundedIcon className={"p-1"} />
            </div>
        </div>
    )
}

const Index = () => {
    return(
        <div className="container-fluid install_discover py-5">
            <div className="install_discover_card">
                <InstallPopupNavbar />
                <br/><br/><br/>
                <div className={"discover_card_content"}>
                    <InputComp />
                    <img
                        src={process.env.PUBLIC_URL+"/assets/connector.png"} />
                    <OutputComp />
                </div><br/><br/><br/>
                <InstallPopupBottomNavbar />
            </div>
        </div>
    )
}


export default Index;