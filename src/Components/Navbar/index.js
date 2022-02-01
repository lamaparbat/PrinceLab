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
    if ($(".resp_nav").css("display") == "none") {
      $(".resp_nav").css("display", "flex");
    } else {
      $(".resp_nav").css("display", "none");
    }
  }

  return (
    <>
      <div className='container navbar fixed-bottom'>
        <li className='link  text-decoration-none'><Link className='text-decoration-none text-light' to="/">Home</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none text-light' to="/Feature">Feature</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none text-light' to="/Download">Download</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none text-light' to="/Career">Career</Link></li>
        <li className='link  text-decoration-none'><Link className='text-decoration-none text-light' to="/About">About</Link></li>
        <button className='shortcut_btn btn btn-light' onClick={showNav}>
          <KeyboardArrowUpIcon />
        </button>
      </div>
      
      {/* on mobile view */}
      <div className='resp_nav'>
        <div className='items'>
          <li className='link  text-decoration-none'><Link  className='text-decoration-none text-black' to="/">Home</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none text-black' to="/Feature">Feature</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none text-black' to="/Download">Download</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none text-black' to="/Career">Career</Link></li>
          <li className='link  text-decoration-none'><Link className='text-decoration-none text-black' to="/Career">About</Link></li>
        </div>
      </div>
      
    </>
  );
}

export default Index;
