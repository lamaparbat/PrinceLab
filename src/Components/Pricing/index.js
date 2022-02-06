import React from 'react';
import Card from '../Pricing/Card/index.js';
import '../Pricing/index.css';

function index() {
  const list1 = ["Support for python", "Programming", "Able to make AI mode", "New update"];
  const list2 = ["Support For Python3 Programming", "Able to make flutter app", "AI model integration", "Application development", "Technical support", "New updates"];
  return (
    <div className='container pricing'>
      <Card
        bg = "warning"
        top_btn="Community"
        price="$0"
        title="Free for both individual and teams "
        list={list1}
        bottom_btn="Start for free"
      />
      <Card
        bg="primary"
        top_btn="Professional"
        price="$10"
        title="Available for both individual and teams "
        list={list2}
        bottom_btn="Purchase"
      />
      
      <Card
        bg="dark"
        top_btn="Community"
        price="$10"
        title="For organizations and companies"
        list={list2}
        bottom_btn="Purchase"
      />
    </div>
  )
}

export default index
