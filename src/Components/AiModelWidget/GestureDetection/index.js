import React, { useState, useRef, useEffect } from 'react';
import '../GestureDetection/index.css';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Webcam from 'react-webcam';

function Index() {
  //global state
  const [isVideoOn, setVideoOn] = useState(false);
  
  //store the camera data
  const camData = useRef();
  
  
  // on very first state changes
  useEffect(() => {

  }, []);
  
  //custom video container 
  const VideoContainer = () => {
    return (
      <div className='video_container'>
        {
          isVideoOn ? <Webcam ref={camData} height="100%" width="100%" id="camCont" /> : <VideocamOutlinedIcon style={{ height: "90px", width: "90px" }} />
        }
        
      </div>
    )
  }

  //custom gesture footer
  const Gesture_footer = () => {
    //on the webcam
    const startVideo = () => {
      setVideoOn(true); 
    }
    
    //off the webcam
    const stopVideo = () => {
      setVideoOn(false);
    }
    
    return (
      <div className='video_footer'>
        <button className='btn px-5 py-2 text-white start_btn' onClick={startVideo}>Start</button>
        <button className='btn px-5 py-2 text-white stop_btn' onClick={stopVideo}>Stop</button>
      </div>
    )
  }

  return (
    <div className='gestureDetection'>
      <VideoContainer />
      <br /><br />
      <Gesture_footer />
    </div>
  )
}

export default Index;
