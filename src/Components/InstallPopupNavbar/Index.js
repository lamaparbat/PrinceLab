import React from "react";
import '../InstallPopupNavbar/Index.css';
import {useDispatch, useSelector} from "react-redux";
import {hideInstallModel} from '../../Redux/Actions/';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Index = () => {

    //create instance of useDispatch & useSelector
    const dispatch = useDispatch();
    const modelData = useSelector(state => state.installModelVisible);

    //close the model
    const closeModal = () => {
        dispatch(hideInstallModel());
    }

    return(
        <div className="install_navbar">
            <div className={"install_navbar_row"}>
                <div className={"brand_cont"}>
                    <div className={"install_navbar_img"}>
                        <img src={modelData.url} />
                    </div>
                    <div className="brand py-1">
                        <h5>{modelData.title}</h5>
                        <span>{modelData.desc}</span><br />
                        <h6>Princelab</h6>
                        <span className={"text-primary btn p-0"}>More info</span>
                    </div>
                </div>
                <CancelRoundedIcon
                    className={"cancel_btn text-dark btn p-0"}
                    onClick={closeModal}
                />
            </div>
        </div>
    )
}

export default Index;