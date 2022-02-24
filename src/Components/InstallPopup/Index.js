import React from 'react';
import '../InstallPopup/Index.css'
import {CancelOutlined} from "@mui/icons-material";

const Index = () => {
    const Navbar = () => {
        return(
            <div className="install_navbar">
               <div className={"brand_cont"}>
                   <div className={"install_navbar_img"}>
                       <img src={process.env.PUBLIC_URL+"/assets/plane.png"} />
                   </div>
                   <div className="brand">
                       <h3>Discover music</h3>
                       <span>Image classification for diseases</span><br />
                       <h6>Princelab</h6>
                       <span className={"text-primary"}>More info</span>
                   </div>
               </div>
                <CancelOutlined />
            </div>
        )
    }

    return(
        <div className="">
            <Navbar />
        </div>
    )
}


export default Index;