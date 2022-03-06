import React from 'react';
import '../intro/index.css';

// Features
const Comp1 = () => {
  return (
    <>
      <div className='comp1'>
        <img src={process.env.PUBLIC_URL+"/assets/dot.png"} alt="" />
        <h1>FEAT<span id='u'>U</span><span id='res'>RES</span></h1>
      </div>
    </>
  )
}

// stylus
const Comp2 = () => {
  return (
    <>
      <div className='comp2'>
        <div className='comp2_header pb-4'>
          <h1 className='comp2_header_title'>STYLUS
            <span className='text-danger'> SUPPORT</span>
          </h1>
          <img
            src={process.env.PUBLIC_URL + "/assets/f3.png"}
            id='pen1'
            loading='lazy'
          />
        </div>
        <div className='comp2_footer'>
          <img
            src={process.env.PUBLIC_URL + "/assets/f1.png"}
            id='pen2'
            loading='lazy'
          />
          <h3>Write notes into your flows by hand using
            a stylus pen. Effective use of this feature
            significantly support clarity and adds a
            whole new dimension to your visual flows. </h3>
        </div>
      </div>
    </>
  )
}

function index() {
  return (
    <div className='container px-1 py-4 bg- intro'>
      <Comp1 />
      <Comp2 />
      <img
        src={process.env.PUBLIC_URL + "/assets/intro-liner.svg"}
        id='intro_liner'
      />
    </div>
  )
}

export default index
