import React from 'react';
import '../AboutEnvironment/index.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function index() {
  return (
    <div className='container-fluid AboutEnvironment'>
      <div className='AboutEnvironment_rows'>
        <img
          src={process.env.PUBLIC_URL + "/assets/environment.png"}
          loading='lazy'
          alt="" />
        <div className='content'>
          <h1><b>Simplest <span>Environment</span></b></h1>
          <h3>With the most tools and function</h3>
          <p className='my-3'>Sketch is the home for your entire collaborative design
            process. From early ideas to pixel-perfect artwork,
            playable prototypes and developer handoff. It all starts
            here. This will result in one ACMI installment plan over 12
            months for the eligible iPad or Mac</p>
          <font className={"text-white font-weight-bold btn p-0"}>Learn how to use it <ArrowRightAltIcon
              className={"text-dark"}
              id="rightArrowIcon"
          /></font>
        </div>
      </div>
    </div>
  )
}

export default index
