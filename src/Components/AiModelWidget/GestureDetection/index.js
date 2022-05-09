import React, { useState, useRef } from 'react';
import './index.css';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Webcam from 'react-webcam';

function Index() {
  //global state
  const [isVideoOn, setVideoOn] = useState(false);
  
  //video height & width
  const videoDimension = {
    height: 300,
    width:400
  }
  

  
  //store the camera data
  const camData = useRef();
  
  //track webcam video 
  const initDetection = async () => {

  }

  //on the webcam
  const startVideo =async () => {
    setVideoOn(true);
    initDetection();
  }

  //off the webcam
  const stopVideo = () => {
    setVideoOn(false);
  }
  
  //custom video container 
  const VideoContainer = () => {
    return (
      <div className='video_container'>
        {
          isVideoOn ? <Webcam ref={camData} height={videoDimension.height} width={videoDimension.width} id="camCont" /> : <VideocamOutlinedIcon style={{ height: "90px", width: "90px" }} />
        }
      </div>
    )
  }

  //custom gesture footer
  const Gesture_footer = () => {
    return (
      <div className='video_footer'>
        <button className='btn px-5 py-2 text-white start_btn' onClick={startVideo}>Start</button>
        <button className='btn px-5 py-2 text-white stop_btn' onClick={stopVideo}>Stop</button>
      </div>
    )
  }

  return (
    <div className='gestureDetection'>
      <h3 id='model_title'>Handpose Detection</h3><br />
      <VideoContainer />
      <br /><br />
      <Gesture_footer />
    </div>
  )
}

export default Index;
