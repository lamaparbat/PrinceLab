import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import '../Career/index.css';
import Front from '../Career/Front/index.js';
import Beta from '../Career/Beta/index.js';
import Journey from '../Career/Journey/index.js';
import CardRow from '../Career/CardRow/index.js';
import $ from 'jquery';

function Index() {
    //auto scroll to the top when page rendered
    useEffect(() => {
        $(window).scrollTop({top: 0, behavior: "smooth"})
    }, [])

    return (
        <div className='container-fluid text-center p-0 career'>
            <Helmet>
                <title>Princelab / Career</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name='description'
                    content='Career provide by princelab. How to get a job in princelab company as software developer, web developer, flutter developer, ios developer, react developer, python developer django developer'
                    key="desc" />
                <meta name='keywords' content='Career, Job, Software developer, Flutter, React, IOS, Android, Web, ML, Django, Python' />
                <meta name="author" content="Prince kumar singh" />
            </Helmet>
            <Front/>
            <Beta/>
            <Journey/><br/><br/>
            <CardRow/><br/><br/>
        </div>
    );
}

export default Index;
