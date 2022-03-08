import React, {useEffect} from 'react';
import Intro from '../About/Intro/index.js';
import Ceo from '../About/Ceo/index.js';
import Cards from '../About/Cards/index.js';
import '../About/index.css';
import $ from "jquery";

function Index() {
    useEffect(()  => {
        $(window).scrollTop({top:0, behavior:"smooth"})
    }, [])
  return (
    <>
      <div className='container-fluid about'>
        <Intro />
        <Ceo />
        <Cards />
      </div>
    </>
  );
}

export default Index;
