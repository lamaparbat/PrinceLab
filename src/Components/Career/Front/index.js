import React, { useEffect, useState } from 'react';
import '../Front/index.css';

function Index() {
  const [imgUrl, setUrl] = useState();
  useEffect(() => {
    true ? setUrl(process.env.PUBLIC_URL + "/assets/create.png") : setUrl(process.env.PUBLIC_URL + "/assets/create.jpg");
  }, [])
  
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
      </button><br />
      <img
        id='front_img'
        src={imgUrl} />
    </div>
  )
}

export default Index
