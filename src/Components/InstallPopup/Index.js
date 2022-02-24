import React from 'react';
import '../InstallPopup/Index.css'
import {CancelOutlined} from "@mui/icons-material";

const Index = () => {
    const Navbar = () => {
        return(
            <div className="install_navbar px-3">
              <div className={"install_navbar_row"}>
                  <div className={"brand_cont"}>
                      <div className={"install_navbar_img"}>
                          <img src={process.env.PUBLIC_URL+"/assets/cloud.png"} />
                      </div>
                      <div className="brand py-1">
                          <h5>Discover music</h5>
                          <span>Image classification for diseases</span><br />
                          <h6>Princelab</h6>
                          <span className={"text-primary btn p-0"}>More info</span>
                      </div>
                  </div>
                  <CancelOutlined className={"text-secondary btn p-0"} />
              </div>
            </div>
        )
    }

    return(
        <div className="discover">
            <Navbar />
            <div className={"discover_content"}>

            </div>
        </div>
    )
}


export default Index;