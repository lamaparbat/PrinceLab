import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../Footer/index.css';

function Index() {
    // hide the footer when form comp rendered
    const cur_route = useLocation().pathname;

    // create instance to push new route
    const navigate = useNavigate()

    //render component of link clicked
    const redirect = (route) => {
        navigate("/" + route)
    }


    return (
        <div
            className={'container-fluid footer d-' +
                (cur_route != "/Login" &&
                    cur_route != "/Signup" &&
                    cur_route != "/QuickGuide" &&
                    cur_route != "/AiPreview" ? "flex" : "none")} >
            <div className='footer_row'>
                <div className='service_col'>
                    <h5><b>Services</b><hr className='separator w-50' /></h5>
                    <a onClick={() => redirect("")}>Paradox</a>
                    <a onClick={() => redirect("Download")}>Download</a>
                    <a onClick={() => redirect("Pricing")}>Pricing</a>
                </div>
                <div className='info_col'>
                    <h5><b>Information</b><hr className='separator w-50' /></h5>
                    <a onClick={() => redirect("QuickGuide")}>Setup Guide</a>
                    <a onClick={() => redirect("Feature")}>Features</a>
                    <a href='#'>Tutorial</a>
                    <a onClick={() => redirect("NewFeatures")}>New Features</a>
                </div>
                <div className='company_col'>
                    <h5><b>Company</b><hr className='separator w-50' /></h5>
                    <a onClick={() => redirect("Career")}>Career</a>
                    <a onClick={() => redirect("About")}>About Us</a>
                    <a onClick={() => redirect("Policy")}>Privacy Policy</a>
                    <a onClick={() => redirect("Terms")}>Terms & Condition</a>
                </div>
                <div className='follow_col'>
                    <h5><b>Follow Us</b><hr className='separator w-25' /></h5>
                    <div className='icons_cont'>
                        <div onClick={() => window.location.assign("https://www.facebook.com/people/Prince-Lab/100070712031228/")}>
                            <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/fb.png"} />
                        </div>
                        <div onClick={() => window.location.assign("https://twitter.com/Princelab2")}>
                            <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/twitter.png"} />
                        </div>
                        <div onClick={() => window.location.assign("https://www.instagram.com/_princelab_/")}>
                            <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/insta.png"} />
                        </div>
                        <div onClick={() => window.location.assign("https://www.linkedin.com/in/prince-lab-3398a7217?originalSubdomain=np")}>
                            <img className='img-fluid' src={process.env.PUBLIC_URL + "/assets/linked.png"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
