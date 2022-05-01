import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../Download/Index.css';
import Premium from "../Hompage/Premium";
import { redirectDestineRoute } from "../../Redux/Actions";
import { toast, ToastContainer } from "react-toastify";
import $ from "jquery";

const Index = () => {
    //creating instance of useDispatch()  -> redux
    const dispatch = useDispatch();

    //creating instance of useNavigate four route pushing
    const navigate = useNavigate();

    //auto scroll to the top when page rendered
    useEffect(() => {
        $(window).scrollTop({ top: 0, behavior: "smooth" })
    }, [])

    // all the mac & windows features in list
    const [mac_features, setMac] = useState([
        "Processor: 2 GHz / M1 (recommended)",
        "RAM: 8 GB",
        "Storage: 8 GB",
        "OS: OS X 10 or recent version"]);
    const [windows_features, setWindows] = useState([
        "Processor: 2 ghz",
        "RAM: 8 GB",
        "Storage: 10 GB",
        "OS: Windows 10 or later"]);


    //custom card box
    const Card = ({ bg, src, btn_text }) => {
        useEffect(() => {
            if (btn_text === "MAC") {
                $("#MAC").prop("disabled", true);
            }  
        }, [])
        //verify the user
        const auth = (type) => {
            try {
                if (localStorage.getItem("princelab") != null && localStorage.getItem("princelab") != "") {
                    if (type !== "MAC") {
                        toast.info("Download started...")
                        window.location.assign("https://www.dropbox.com/s/7u6655dcwxiiu7i/paradox%20installer.zip?dl=1");
                        return;
                    } else {
                        toast.info("App is in progress...")
                        // window.location.assign("https://www.dropbox.com/s/pweao3c4o9col8d/Paradox.zip?dl=1");
                        return;
                    }
                } else {
                    dispatch(redirectDestineRoute("Download"))
                    navigate("/Login")
                }
            } catch (error) {
                console.log(error)
            }
        }

        return (
            <div className="downloads_box_card">
                {
                    btn_text === "MAC" ?
                        <div className='beta_container w-100 d-flex justify-content-end'>
                            <span className='bg-success' id='beta_text'>Beta</span>
                        </div> : null
                }
                <img
                    className='p-3'
                    src={src} />
                <button className={"btn text-white my-3 w-50 btn-" + bg + " " + bg}>
                    {btn_text}
                </button>
                <div className="downloads_box_card_content">
                    {
                        btn_text != "MAC" ?
                            windows_features.map((data, index) => {
                                return <span key={index}>{data}</span>
                            }) :
                            mac_features.map((data, index) => {
                                return <span key={index}>{data}</span>
                            })
                    }
                </div>
                <button
                    className={"btn btn-primary text-white my-3 w-100 rounded-1 btn-" + bg + " " + bg}
                    onClick={() => auth(btn_text)}
                    id={btn_text}
                >
                    {
                        btn_text === "MAC" ? "Progressing.." : "Download"
                    }
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="downloads">
                <div className="downloads_box">
                    <Card
                        bg="primary"
                        src={process.env.PUBLIC_URL + "/assets/mac.png"}
                        btn_text="MAC"
                    />
                    <Card
                        bg="info"
                        src={process.env.PUBLIC_URL + "/assets/windows.svg"}
                        btn_text="WINDOWS"
                    />
                </div>
                <br /><br />
                <Premium />
                <ToastContainer position="top-center" />
            </div>
        </>
    )
}
export default Index;