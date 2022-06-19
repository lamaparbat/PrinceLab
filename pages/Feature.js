import React, { useEffect } from 'react';
import Head from 'next/head.js';
import Intro from '../Components/Features/intro/index.js';
import Parallel from '../Components/Features/parallel/index.js';
import Cards from '../Components/Features/cards/index.js';
import Python3 from '../Components/Features/python3/index.js';
import styles from '../styles/Features/index.module.css';
import $ from "jquery";

const Index = () => {
    //auto scroll to the top when page rendered
    useEffect(() => {
        $(window).scrollTop({top: 0, behavior: "smooth"})
    }, [])

    return (
        <>
            <div className={'container-fluid ' + styles.features}>
                <Head>
                    <title>Princelab/Features</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta
                        name='description'
                        content='Parallel Computing.Create / Rename / Delete.Python Function Inbuilt.Almost every python inbuilt functions are integrated in our editor. You can access instantly with right click on your mouse. Data flow'
                        key="desc"
                    />
                    <meta
                        name='keywords'
                        content='Features, Parallel, Computing, Create, Python, Function, Inbuilt, Data, Flow'
                    />
                    <meta name="author" content="Prince kumar singh" />
                </Head>
                <Intro />
                <Parallel />
                <Cards />
                <Python3 />
            </div>
        </>
    )
}

export default Index
