import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/QuickGuide/Body/Block/index.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { showSidebar, hideSidebar } from "../../../../Redux/Actions/index";


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
   <div className={'px-4 pt-3 ' + styles.getStartedRow}>
    <MenuIcon className='btn p-0' onClick={changeSidebar} /><br/><br/>
    <h3 className={styles.bold}>In-built block</h3><br />
    <h4 className='mt-4'> 1. Slider block</h4>
    <video src={"/assets/tutorial_video/Slider.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'> 2. Code block</h4>
    <video src={"/assets/tutorial_video/code block.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-4'> 3. Rename block</h4>
    <video src={"/assets/tutorial_video/renaming blocks.mp4"} width="80%" autoPlay></video><br />
    <h4 className='mt-3'>3. Slider for gates</h4>
    <video src={"/assets/tutorial_video/Slider for gates.mp4"} width="80%" autoPlay></video><br />
   </div>
  </div>
 )
}

export default Index;