import React, {useEffect} from 'react';
import '../Feature/index.css';
import Intro from '../Feature/intro/index';
import Parallel from '../Feature/parallel/index';
import Cards from '../Feature/cards/index';
import Python3 from '../Feature/python3/index';
import $ from "jquery";

function Index() {
    //auto scroll to the top when page rendered
    useEffect(() => {
        $(window).scrollTop({top: 0, behavior: "smooth"})
    }, [])

    return (
        <div className='container-fluid features'>
            <Intro/>
            <Parallel/>
            <Cards/>
            <Python3/>
        </div>
    )
}

export default Index
