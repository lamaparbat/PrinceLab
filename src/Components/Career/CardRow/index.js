import React from 'react';
import '../CardRow/index.css';

function index() {
  //custom dot component
  const Dot = () => {
    return (
      <div className='dot 1mx-2'></div>
    )
  }
  
  // custom card
  const Card = () => {
    return (
      <div className='cardRow_card'>
        <h2 className='my-3'>Software Engineer (Qt/UI)</h2>
        <button className='btn py-0'>Can you build a dropbox-like app people will use ? </button>
        <h4 className='mt-3'>Qualification</h4>
        <div className='card_features d-flex flex-column'>
          <span><Dot />QT5 or similar SDK experience</span>
          <span><Dot />QT5 or similar SDK experience</span>
          <span><Dot />QT5 or similar SDK experience</span>
          <span><Dot />QT5 or similar SDK experience</span>
        </div><br/>
        <button className='btn apply px-5 py-2'>Apply Now</button>
      </div>
    )
  }

  return <div className='container cardRow'>
    <Card />
  </div>;
}

export default index;
