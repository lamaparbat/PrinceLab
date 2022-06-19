import React, { useEffect } from 'react';
import Head from 'next/head';
import Cards from '../Components/About/Card';
import Intro from '../Components/About/Intro';
import Ceo from '../Components/About/Ceo';
import styles from '../styles/About/About.module.css';
import $ from "jquery";

function Index() {
    useEffect(()  => {
        $(window).scrollTop({top:0, behavior:"smooth"})
    }, [])
  return (
    <div className={'container-fluid p-0 ' + styles.about}>
      <Head>
        <title>Princelab/About us</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name='description'
          content='Prince Lab is more than our paradox software. Princelab was always about developing new innovation for the future.'
          key="desc"
        />
        <meta
          name='keywords'
          content='Prince Kumar Singh,CEO,FOUNDER,Join,paradox software, Programming world'
        />
        <meta name="author" content="Prince kumar singh" />
      </Head>
        <Intro />
        <Ceo /> 
        <Cards />
      </div>
  );
}

export default Index;
