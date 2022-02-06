import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import $ from 'jquery';
import '../Navbar/index.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Index() {
  //show navbar on btn click
  useEffect(() => {
    $(".resp_nav").css("display", "none");
    $(".resp_nav").css("position", "fixed");
    
    $(window).on("resize", () => {
      $(".resp_nav").css("display", "none");
    })
  }, [])
  
  const showNav = () => {
    if ($(".resp_nav").css("display") === "none") {
      $(".resp_nav").css("display", "flex");
    } else {
      $(".resp_nav").css("display", "none");
    }
  }

  return (
    <>
      <div className='container navbar fixed-bottom'>
        <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/">Home</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Feature">Feature</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Download">Download</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Pricing">Pricing</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/About">About</Link></li>
        <button className='shortcut_btn btn btn-light' onClick={showNav}>
          <KeyboardArrowUpIcon />
        </button>
      </div>
      
      {/* on mobile view */}
      <div className='resp_nav'>
        <div className='items'>
          <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/">Home</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Feature">Feature</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Download">Download</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/Pricing">Pricing</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none' to="/About">About</Link></li>
        </div>
      </div>
      
    </>
  );
}

export default Index;
