import React from 'react';
import Intro from '../About/Intro/index.js';
import Ceo from '../About/Ceo/index.js';
import Cards from '../About/Cards/index.js';
import '../About/index.css';

function index() {
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

export default index;
