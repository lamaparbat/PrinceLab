import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import Intro from '../About/Intro/index.js';
import Ceo from '../About/Ceo/index.js';
import Cards from '../About/Cards/index.js';
import '../About/index.css';
import $ from "jquery";

function Index() {
  useEffect(() => {
    $(window).scrollTop({ top: 0, behavior: "smooth" });
  }, [])
  return (
    <>
      <div className='container-fluid about'>
        <Helmet>
          <title>Princelab / About</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='description'
            content='Prince Lab is more than our paradox software. Princelab was always about developing new innovation for the future.'
            key="desc" />
          <meta name='keywords' content='About, Princelab, CEO, Prince Singh' />
          <meta name="author" content="Prince kumar singh" />
        </Helmet>
        <Intro />
        <Ceo />
        <Cards />
      </div>
    </>
  );
}

export default Index;
