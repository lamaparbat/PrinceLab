import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/QuickGuide/index.module.css';
import Sidebar from '../Components/QuickGuide/Sidebar/Index';
import GetStarted from '../Components/QuickGuide/GetStarted/index';
import InstallGuide from '../Components/QuickGuide/Body/Installation/index';
import InterfaceGuide from '../Components/QuickGuide/Body/Interface/index';
import BlockGuide from '../Components/QuickGuide/Body/Block/index';
import CodeGuide from '../Components/QuickGuide/Body/Code/index';
import MLGuide from '../Components/QuickGuide/Body/ML/index';

//main function
const Index = () => {  
 //custom body component
 const Body = () => {
  //track redux state changes
  const currentContentID = useSelector(state => state.updateGuideContent);
  return (
   <>
    {
     currentContentID === "GettingStarted" ? <GetStarted /> : null
    }
    {
     currentContentID === "Installation" ? <InstallGuide /> : null
    }
    {
     currentContentID === "Interface" ? <InterfaceGuide /> : null
    }
    {
     currentContentID === "Block" ? <BlockGuide /> : null
    }
    {
     currentContentID === "Code" ? <CodeGuide /> : null
    }
    {
     currentContentID === "ML" ? <MLGuide /> : null
    }
   </>)
 }
 return (
     <div className={styles.quick_guide}>
       <Sidebar />
       <Body />
     </div>
 )
}

export default Index;