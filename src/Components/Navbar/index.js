import React from 'react';
import '../Navbar/index.css';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

//show navbar on btn click
const showNav = () => {
  document.querySelector(".navbar .shortcut_btn").style.display = "none";
  document.querySelector(".navbar").style.visibility = "visible";
  document.querySelector(".navbar .link").style.display = "flex";
  document.querySelectorAll(".navbar .link").style.flexDirection = "column";
}

function index() {
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
    </>
  );
}

export default index;
