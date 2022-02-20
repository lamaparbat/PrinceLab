import React from 'react';
import '../Career/index.css';
import Front from '../Career/Front/index.js';
import Beta from '../Career/Beta/index.js';
import Journey from '../Career/Journey/index.js';
import CardRow from '../Career/CardRow/index.js';
import $ from 'jquery';

function index() {
  return (
    <div className='container-fluid text-center p-0 career'>
      <Front />
      <Beta />
      <Journey /><br/><br/>
      <CardRow /><br /><br />
    </div>
  );
}

export default index;
