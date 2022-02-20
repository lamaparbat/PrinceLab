import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import '../Download/Index.css';
import Premium from "../Hompage/Premium";
import {redirectDestineRoute} from "../../Redux/Actions";

const Index = () => {
    //creating instance of useDispatch()  -> redux
    const dispatch = useDispatch();

    //creating instance of useNavigate four route pushing
    const navigate = useNavigate();

    // all the mac & windows features in list
    const [mac_features, setMac] =useState( [
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
    const Card = ({bg, src, btn_text}) => {
        //verify the user
        const auth = (type) => {
            if(JSON.parse(localStorage.getItem("princelab")).username != ""){
                // (type != "MAC") ? :
            }else{
                dispatch(redirectDestineRoute("Login"))
                navigate("/Login")
            }
        }

        return(
            <div className="downloads_box_card">
                <img
                    src={src} />
                <button className={"btn my-3 w-50 btn-"+bg}>{btn_text}</button>
                <div className="downloads_box_card_content">
                    {
                        btn_text != "MAC" ?
                            windows_features.map((data,index) => {
                                return <span key={index}>{data}</span>
                            }) :
                            mac_features.map((data,index) => {
                                return <span key={index}>{data}</span>
                            })
                    }
                </div>
                <button
                    className={"btn btn-primary my-3 w-100 rounded-1 btn-"+bg}
                    onClick={() => auth(btn_text)}
                >Donwload</button>
            </div>
        )
    }
     return(
        <>
            <div className="downloads">
               <div className="downloads_box">
                   <Card
                       bg="primary"
                       src={process.env.PUBLIC_URL+"/assets/mac.png"}
                       btn_text = "MAC"
                   />
                   <Card
                       bg="info"
                       src={process.env.PUBLIC_URL+"/assets/windows.svg"}
                       btn_text = "WINDOWS"
                   />
               </div><br/><br/>
                <Premium />
            </div>
        </>
    )
}

export default Index;