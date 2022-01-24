import React from 'react';
import '../Premium/index.css';
import PersonIcon from '@mui/icons-material/Person'; 
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function index() {
  return (
   <div className='container my-4 premium'>
    <div className="premium_row text-light">
     {/* header */}
     <div className='header my-3 mb-5 d-flex justify-content-between align-items-center'>
      <button className='btn text-light border-light px-3 rounded-0 py-0'>Paradox</button>
      <span className='font-monospace h6'>+977 046-540-410</span>
     </div>
     
     {/* body */}
     <div className='body'>
      <div className='text-content my-4'>
       <h4>Try paradox for premium</h4>
       <span>Get started using paradox with a 30-day free trail <br />
        Join our developer team to get the latest news and updates</span><br /><br />
       <a href="#" className='btn btn-light rounded-0 py-1 px-5'>Try it</a>
      </div>
      <img src={process.env.PUBLIC_URL+"/assets/premium.jpeg"} width="300px" height="200px" alt='premium_banner' />
     </div>
     
     {/* footer */}
    </div><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default index
