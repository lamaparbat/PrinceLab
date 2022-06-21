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

 //sub video container
 const VideoContainer = ({title, src}) => {
  return (
   <div className='ml-4'>
    <p>{ title}</p>
    <video src={src} width="80%" autoPlay loop></video><br />
   </div>
  )
 }

 return (
  <div className="container getStarted pt-5">
   <div className='getStartedRow px-4 pt-3'>
    <MenuIcon className='btn p-0' onClick={changeSidebar} /><br /><br />
    <h3 className='bold'>Paradox Interface</h3><br />
    <p className='title'><b>1. Menu and Theme</b></p>
    <VideoContainer
     title="a). Themes Flow"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/1.flow themes.mp4"} />
    <VideoContainer
     title="b). System Themes"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/1.system theme.mp4"} />
    <VideoContainer
     title="c). Menu and Themes"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/1.menu and themes.mp4"} />
    <p className='mt-4 title text-danger'>2. Sidebar</p>
    <p className='mt-4 title'>3. Create new scripts</p>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/creating script.mp4"} width="80%" autoPlay></video><br />
    <p className='mt-4 title'>4. Create new macro</p>
    <VideoContainer
     title="a). Create a macro scripts"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/creating macro.mp4"} />
    <VideoContainer
     title="b). Create macros"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/creating micro's.mp4"} />
    <p className='mt-4 title'>5. Save & Open projects</p>
    <VideoContainer
     title="a). Save project"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/Save project.mp4"} />
    <VideoContainer
     title="a). Open saved project"
     src={process.env.PUBLIC_URL + "/assets/tutorial_video/"} />
    <p className='mt-4 title'>6. Enable and Disable extension</p>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/7.enable and disable extension.mp4"} width="80%" autoPlay></video><br />
    <p className='mt-4 title'>7. Execution Modes</p>
    <video src={process.env.PUBLIC_URL + "/assets/tutorial_video/8.execution mode.mp4"} width="80%" autoPlay></video><br />
   
   </div>
  </div>
 )
}

export default Index;