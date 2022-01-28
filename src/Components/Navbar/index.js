import React, {useEffect} from 'react';
import $ from 'jquery';
import '../Navbar/index.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

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
        <li className='link'>Home</li>
        <li className='link'>Features</li>
        <li className='link'>Download</li>
        <li className='link'>Career</li>
        <li className='link'>About</li>
        <button className='shortcut_btn btn btn-light' onClick={showNav}>
          <MenuOpenIcon />
        </button>
      </div>
      
      {/* on mobile view */}
      <div className='resp_nav'>
        <div className='items'>
          <li className='link'>Home</li>
          <li className='link'>Features</li>
          <li className='link'>Download</li>
          <li className='link'>Career</li>
          <li className='link'>About</li>
        </div>
      </div>
      
    </>
  );
}

export default Index;
