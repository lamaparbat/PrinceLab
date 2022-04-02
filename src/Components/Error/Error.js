import React from 'react';
import '../Error/index.css';

function Error() {
  return (
    <div className='container-fluid errorContainer'>
      <div className='span bg-danger'>
        Oops! The page cannot be found.
      </div>
    </div>
  )
}

export default Error;
