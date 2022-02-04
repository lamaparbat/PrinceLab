import React from 'react';
import '../Feature/index.css';
import Intro from '../Feature/intro/index';
import Parallel from '../Feature/parallel/index';
import Cards from '../Feature/cards/index';
import Python3 from '../Feature/python3/index';

function index() {
  return (
    <div className='container-fluid features'>
      <Intro />
      <Parallel />
      <Cards />
      <Python3 />
    </div>
  )
}

export default index
