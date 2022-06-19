import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/QuickGuide/Body/Interface/index.module.css';
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
  <div className={"container pt-5 " + styles.getStarted}>
   <div className={'px-4 pt-3 ' +styles.getStartedRow}>
    <MenuIcon className='btn p-0' onClick={changeSidebar} /><br/><br/>
    <h3 className='bold'>Paradox Interface</h3><br/>
    <h4>1. Menu and Theme</h4>
    <video src={ "/assets/tutorial_video/menu and themes.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>2. System Themes</h4>
    <video src={ "/assets/tutorial_video/system theme.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>3. Create new macro</h4>
    <video src={ "/assets/tutorial_video/creating macro.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>4. Create new micro</h4>
    <video src={ "/assets/tutorial_video/creating micro's.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>5. Create new scripts</h4>
    <video src={ "/assets/tutorial_video/creating script.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>5. Data broadcasting</h4>
    <video src={ "/assets/tutorial_video/data broadcasting.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'>5. Save projects</h4>
    <video src={ "/assets/tutorial_video/Save project.mp4"} width="80%" autoPlay></video><br />
   </div>
  </div>
 )
}

export default Index;