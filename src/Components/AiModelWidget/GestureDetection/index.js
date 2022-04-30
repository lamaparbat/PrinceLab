import React from 'react';
import '../GestureDetection/index.css';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

function Index() {
 //custom video container 
 const VideoContainer = () => {
  return (
   <div className='video_container'>
    <VideocamOutlinedIcon style={{height:"90px", width:"90px"}} />
   </div>
  )
 }
 
 //custom gesture footer
 const Gesture_footer = () => {
  return (
   <div className='video_footer'>
    <button className='btn px-5 py-2 text-white start_btn'>Start</button>
    <button className='btn px-5 py-2 text-white stop_btn'>Stop</button>
   </div>
 )
 }
 
 return (
  <div className='gestureDetection'>
   <VideoContainer />
   <br/><br/>
   <Gesture_footer />
  </div>
 )
}

export default Index;
