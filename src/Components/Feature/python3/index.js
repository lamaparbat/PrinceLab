import React from 'react';
import '../python3/index.css';

function index() {
  return (
    <div className='container mb-3 python3'>
    <div className='rows'>
     <h2><strong>Python3 By Default</strong></h2>
     <p className='mt-2 mb-4'>Almost every python inbuilt functions are integrated in our editor.
      You can access instantly with right click on your mouse. </p>
     <img src={process.env.PUBLIC_URL+"/assets/python.png"} />
    </div>
    </div>
  )
}

export default index
