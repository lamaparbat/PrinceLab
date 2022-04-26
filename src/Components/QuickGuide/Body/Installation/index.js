import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Installation/index.css';
import MenuIcon from '@mui/icons-material/Menu';
import { showSidebar, hideSidebar } from "../../../../Redux/Actions/index";
import axios from 'axios';


const Index = () => {
 //action dispatcher
 const dispatch = useDispatch();
 
 //track redux state
 const sidebarVisibility = useSelector(state => state.sidebarVisibility);
 
 //close or open sidebar
 const changeSidebar = () => {
  console.log(sidebarVisibility)
  if (sidebarVisibility === "hide") {
   // //update the redux store
   dispatch(showSidebar())
  
  } else {
   //update the redux store
   dispatch(hideSidebar())
  }
 }
 
 return (
  <div className="container getStarted pt-5">
   <div className='getStartedRow px-4 pt-3'>
    <MenuIcon className='btn p-0' onClick={changeSidebar} /><br/><br/>
    <div className='guide_installation1'>
     <br/>
     <h2 id='title'>How to download and install paradox? </h2><br/>
     <h4>Windows</h4>
     <ol>
      <li> Go to <a href="/download">princelab.org/download</a> and download the paradox.zip.</li>
      <li>Extract the zip file,</li>
      <li>Go inside paradox folder and double click paradox.msi file. </li>
      <li>follow the install instruction</li>
     </ol>
    </div>
   </div>
  </div>
 )
}

export default Index;