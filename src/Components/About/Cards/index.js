import React from 'react';
import '../Cards/index.css';

function index() {
  // custom card box
  const Card1 = () => {
    return (
      <>
        <div className='card1'>
          <div className='body'>
            <h3>See our </h3>
            <h4>mind behind the scene</h4>
            <img
              src={process.env.PUBLIC_URL + "/assets/create.png"}
              loading="lazy"
            />
          </div>
          <div className='card1_footer'>
            <h6>Get to know about
              our revolutionary
              Software</h6>
            <img
              src={process.env.PUBLIC_URL + "/assets/block.png"}
              loading="lazy"
            />
          </div>
        </div>
      </>
    )
  }

  // custom card box
  const Card2 = () => {
    //custom dot component
    const Dot = () => {
      return (
        <div className='dot 1mx-2'></div>
      )
    }

    return (
      <>
        <div className='card2 text-center'>
          <img
            id='step_img'
            src={process.env.PUBLIC_URL + "/assets/step.png"}
            loading="lazy"
          />
          <div className='card2_features py-4'>
            <h6>Become a part of our journey</h6>
            <div className='quotes pb-2 pt-3'>
              <span><Dot />We push our boundaries everyday </span><br />
              <span><Dot />Respect talent and creativity </span><br />
              <span><Dot />Always think different</span><br />
            </div>
            <button className='btn btn-dark border-white w-50 py-1'>Join Us</button>
          </div>
        </div>
      </>
    )
  }

  return <div className='cards py-5 pt-3'>
    <Card1 />
    <Card2 />
  </div>;
}

export default index;
