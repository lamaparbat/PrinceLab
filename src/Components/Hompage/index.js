import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import '../Hompage/index.css';
import Languages from '../Hompage/Languages/index';
import BlockCodeCardImg from '../Hompage/BlockCodeCardImg/index';
import AboutEnvironment from '../Hompage/AboutEnvironment/index';
import Services from '../Hompage/Services/index';
import Premium from '../Hompage/Premium/index';
import Download from '../Hompage/Download/index';
import Guide from '../Hompage/Guide/index';
import $ from "jquery";

function Index() {
    //auto scroll to the top when page rendered
    useEffect(() => {
        $(window).scrollTop({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <>
            <Helmet>
                <title>Princelab</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description'
                    content='Prince Lab is more than our paradox software. Princelab was always about developing new innovation for the future.'
                    key="desc" />
                <meta name='keywords' content='prince,programming,paradox,princelab' />
                <meta name="author" content="Prince kumar singh" />
            </Helmet>
            <div className='container-fluid homepage'>
                <video
                    className='video'
                    src={process.env.PUBLIC_URL + "/assets/paradox.mp4"}
                    autoPlay loop muted></video>
            </div>
            <br />
            <Languages/>

            <BlockCodeCardImg/>

            <AboutEnvironment/>

            <Services/>

            <Premium/>

            <Download/>

            <Guide/>
        </>);
}

export default Index;
