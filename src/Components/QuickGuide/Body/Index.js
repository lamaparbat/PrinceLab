import React, {useEffect} from 'react';
import '../Body/Index.css';
import {useSelector, useDispatch} from "react-redux";
import {showSidebar, hideSidebar} from "../../../Redux/Actions";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

//main function
const Index = () => {
    //create the instance of useDispatch & useSelectore
    const dispatch = useDispatch()
    const sidebarVisibility = useSelector(state => state.sidebarVisibility)


    //custom banner card
    const BannerCard = ({src,title1,title2,title3,btn,btn_bg}) => {
        const bg = "red";
        return(
            <div
                className="quick_guide_body_banner_card mx-2"
                style={{
                    background: `url(${src})`,
                    backgroundSize: "100% 100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center"
                }}
            >
                <h1 className="text-dark">{title1}</h1>
                <h1 className="text-light">{title2}</h1>
                <h1 className="text-light">{title3}</h1>
                <button
                    className={
                    "btn rounded-pill py-0 btn-"+btn_bg
                }
                >{btn}</button>
            </div>
        )
    }


    return (
        <div className="quick_guide_body px-4 py-3 w-100">
            <div className="body_nav">
                <MenuOpenIcon
                    className={"btn p-0 position-fixed animate__animated animate__slideInLeft animate__faster"}
                    onClick={() => dispatch(showSidebar())}/>
            </div>
            <center>
                <div
                    className={"quick_guide_body_banner"}
                    style={{
                        height: "500px",
                        width: "90%",
                        background: `url(${process.env.PUBLIC_URL + "/assets/guide_img1.png"})`,
                        backgroundSize: "100% 100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center"
                    }}
                >
                    <h1>Get</h1>
                    <h1>Started</h1>
                </div>
                <div className="quick_guide_body_banner_card_rows">
                    <BannerCard
                        src = {process.env.PUBLIC_URL+"/assets/guide_img2.png"}
                        title1="New"
                        title2="to"
                        title3="Paradox"
                        btn="Learn More"
                        btn_bg ="primary"
                    />
                    <BannerCard
                        src = {process.env.PUBLIC_URL+"/assets/guide_img3.png"}
                        title1="Tutorial"
                        title2="Videos"
                        title3=""
                        btn ="Play Now"
                        btn_bg ="dark"
                    />
                </div><br/>
                <div className="quick_guide_body_banner_card_rows">
                    <BannerCard
                        src = {process.env.PUBLIC_URL+"/assets/guide_img2.png"}
                        title1="New"
                        title2="to"
                        title3="Paradox"
                        btn="Learn More"
                        btn_bg ="primary"
                    />
                    <BannerCard
                        src = {process.env.PUBLIC_URL+"/assets/guide_img3.png"}
                        title1="Tutorial"
                        title2="Videos"
                        title3=""
                        btn ="Play Now"
                        btn_bg ="dark"
                    />
                </div>
            </center><br/><br /><br/><br/>
        </div>
    )
}

export default Index;