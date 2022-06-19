import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Career/index.module.css';
import Front from '../Components/Career/Front/index';
import Beta from '../Components/Career/Beta/index.js';
import Journey from '../Components/Career/Journey/index.js';
import CardRow from '../Components/Career/CardRow/index.js';
import $ from 'jquery';

function Index() {
 //auto scroll to the top when page rendered
 useEffect(() => {
  $(window).scrollTop({ top: 0, behavior: "smooth" })
 }, [])

 return (
   <div className={'container-fluid text-center p-0 ' + styles.career}>
     <Head>
       <title>Princelab/Career</title>
       <meta charSet="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta
         name='description'
         content='Software Engineer (Qt/UI), ML engineer / Data Scientist,Electronic Engineer,IOS Developer'
         key="desc"
       />
       <meta
         name='keywords'
         content='Software,Engineer,Data,Scientist,Electronic,ML,IOS,Developer,UI'
       />
       <meta name="author" content="Prince kumar singh" />
     </Head>
    <Front />
    <Beta />
    <Journey /><br /><br />
    <CardRow /><br /><br />
   </div>
 );
}

export default Index;
