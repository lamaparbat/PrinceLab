import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/QuickGuide/Body/ML/index.module.css';
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
    <h3 className={styles.bold}>Machine learning block</h3>
   </div>
  </div>
 )
}

export default Index;