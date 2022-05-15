import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Interface/index.css';
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
    <h3 className='bold'>In-built block</h3><br />
    <h4 className='mt-4'> 1. Slider block</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/Slider.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'> 2. Code block</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/code block.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'> 3. Rename block</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/renaming blocks.mp4"} width="80%" autoPlay></video><br />

   </div>
  </div>
 )
}

export default Index;