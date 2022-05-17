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
    <h3 className='bold'>Code in Paradox</h3><br />
    <h4>1. Add & Multiply</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/Add&multiply.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>2. Square root</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/Sqrt .mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>3. AND</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/AND.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>4. NOT</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/NOT.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>5. NAND</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/NAND.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>6. XNOR</h4>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/XNOR.mp4"} width="80%" autoPlay></video><br />
   </div>
  </div>
 )
}

export default Index;