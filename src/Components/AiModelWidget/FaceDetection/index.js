import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import $ from 'jquery';

function Index() {
  //global state
  const [isVideoOn, setVideoOn] = useState(false);
  const videoDimension = {
    height: 300,
    width:400
  }
  
  //store the camera data
  const camData = useRef();
  const canvasData = useRef();
  
  // on very first state changes
  useEffect(() => {
    //load tensorflow models
    const loadModels = async () => {
      console.log("loading...")
      //model url from local folder
      const model_url = process.env.PUBLIC_URL + "/models";

      //load the model into api
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(model_url),
        faceapi.nets.faceLandmark68Net.loadFromUri(model_url),
        faceapi.nets.faceRecognitionNet.loadFromUri(model_url),
        faceapi.nets.faceExpressionNet.loadFromUri(model_url),
      ]).then(() => {
        console.log("model successfully loaded !!");
      });
    }
    
    loadModels();
  }, []);
  
  //track webcam video 
  const initDetection = () => {
    console.log("loading stopped")
    setInterval(async () => {
      //draw over canvas
      canvasData.current.innerHTML = faceapi.createCanvas(camData.current.video);

      
      const canvasSize = {
        width: videoDimension.width,
        height: videoDimension.height
      }
      
      faceapi.matchDimensions(canvasData.current, canvasSize);
      
      const detections = await faceapi.detectAllFaces(camData.current.video, new faceapi.TinyFaceDetectorOptions)
        .withFaceLandmarks()
        .withFaceExpressions();
      
      const resizedDetections = faceapi.resizeResults(detections, canvasSize);
      
      canvasData.current.getContext("2d").clearRect(0, 0, canvasSize.width, canvasSize.height);
      
      faceapi.draw.drawDetections(canvasData.current, resizedDetections);
      
      faceapi.draw.drawFaceLandmarks(canvasData.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasData.current, resizedDetections);
  
    }, 100);
    
  }

  //on the webcam
  const startVideo = () => {
    setVideoOn(true);
    initDetection();
  }

  //off the webcam
  const stopVideo = () => {
    setVideoOn(false);
    $("#canvas").hide()
  }
  
  //custom video container 
  const VideoContainer = () => {
    return (
      <div className='video_container'>
        {
          isVideoOn ? <Webcam ref={camData} height={videoDimension.height} width={videoDimension.width} id="camCont" /> : <VideocamOutlinedIcon style={{ height: "90px", width: "90px" }} />
        }
        <canvas ref={canvasData} id="canvas"></canvas>
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
      <h3 id='model_title'>Face Motion Detection</h3><br />
      <VideoContainer />
      <br /><br />
      <Gesture_footer />
    </div>
  )
}

export default Index;
