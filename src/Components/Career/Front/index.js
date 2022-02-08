import React from 'react';
import '../Front/index.css';

function index() {
  return (
    <div className='front'>
    <h1>
     <span id='s'>S</span>truggle hard.<br />
     <span id='tay'>tay paradox</span>
    </h1>
    <button className='px-4 py-2' id='btn'>
     <span className='printf'>printf</span>
     <span>
      ('create my <span className='text-primary'>world</span>')
     </span>
    </button><br/>
    <img
     id='front_img'
     src={process.env.PUBLIC_URL + "/assets/create.png"} />
    </div>
  )
}

export default index
