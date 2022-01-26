import React from 'react';
import '../Premium/index.css';
import PersonIcon from '@mui/icons-material/Person'; 
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function index() {
  return (
    <div className='container my-4 pt-5 premium'>
    <div className="premium_row text-light">
     <div className='body'>
      <div className='text-content my-4'>
       <h4>Try paradox for premium</h4>
       <span>Get started using paradox with a 30-day free trail <br />
        Join our developer team to get the latest news and updates</span><br /><br />
       <a href="#" className='btn btn-dark rounded-1 py-1 px-5'>Try it</a>
      </div>
     </div>
    </div>
    </div>
  )
}

export default index
