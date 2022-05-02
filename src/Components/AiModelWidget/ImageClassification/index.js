import React, { useState, useRef, useEffect } from 'react';
import '../ImageClassification/index.css';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import * as mobilenet from '@tensorflow-models/mobilenet';
import Webcam from 'react-webcam';
import $ from 'jquery';
import 'animate.css';

function Index({ id }) {
  //global state
  const [isWebcamOpen, setWebcamOpen] = useState(false);
  const [isCapturedImg, setCaputuredImg] = useState(false);
  const [predictResult, setPredictResult] = useState({
    name: null,
    percentage: 0
  });
  const [isLoading, setLoading] = useState(false);

  //store the camera data
  const camData = useRef();

  //custom photo save button comppnent
  const SaveButtonComp = () => {
    return (
      <div className='saveButton btn p-2'>
        <SaveAltIcon className='p-1' id="footer_icon" />
      </div>
    )
  };

  //custom camera button component
  const MediaButton = ({ id }) => {
    //open camera
    const openCamera = () => {
      setPredictResult({
        name: null,
        percentage: 0
      });
      isWebcamOpen ? setWebcamOpen(false) : setWebcamOpen(true);
    }

    return (
      <div className='cameraButton btn p-2'>
        {
          id === "camera" ? <CameraAltIcon className='p-1' id="footer_icon" onClick={openCamera} /> : <MicOutlinedIcon className='p-1' id="footer_icon" />
        }
      </div>
    )
  }


  //classify the given input image 
  const classifyImage = async () => {
    setTimeout(() => {
      $(".imgClassificationCont .classific_body .connector").removeClass("animate__animated animate__rotateIn animate__repeat-2")
      $(".imgClassificationCont .classific_body .connector").addClass("animate__animated animate__jackInTheBox animate__repeat-2")
    }, 1000);
    
    $(".imgClassificationCont .classific_body .connector").removeClass("animate__animated animate__jackInTheBox animate__repeat-2")
    try {
      const model = await mobilenet.load()
      const results = await model.classify(document.querySelector(".imgClassificationCont .classific_body .img_box .captured_img_element"));
      if (results) {
        //percentage conversion
        const percentage = Math.round(results[0].probability * 100)

        //fill the result into the output ui
        setPredictResult({
          name: results[0].className,
          percentage: percentage
        });

        //stop loading effect
        setLoading(false);

        return true;
      }
    } catch (error) {
      console.log(error)

      //stop loading effect
      setLoading(false);

      return false;
    }
  }

  //capture photo
  const captureImage = async () => {
    $(".imgClassificationCont .classific_body .connector").addClass("animate__animated animate__rotateIn animate__repeat-2");

    //start loading effect
    setLoading(true);

    // store the captured image data
    const image = await camData.current.getScreenshot()
    if (image.length > 0) {
      setWebcamOpen(false);
      setCaputuredImg(true);
      $(".imgClassificationCont .classific_body .img_box .captured_img_element").attr("src", image);

      //predict the image
      classifyImage();
    } else {
      setCaputuredImg(false)
    }
    return;
  }

  return (
    <div className='imgClassificationCont p-3'>

      {/* body */}
      <div className='classific_body'>
        <div className='img_box'>

          {
            id === "img_class" ?
              <>
                {
                  isWebcamOpen ? <Webcam ref={camData} height={350} width={350} id="camCont" /> : null
                }
                {
                  isCapturedImg ? <img height="100%" width="100%" className="captured_img_element" /> : <PhotoSizeSelectActualOutlinedIcon id="photoIcon" />
                }
              </> :
              <div className='content'>
                <h5>Recorded List</h5>
                <div className='audio_name mt-3 w-100 bg-dark d-flex justify-content-between align-items-center'>
                  <AudioFileOutlinedIcon className='p-2' />
                  <font>Intention ft. quavo.mp3</font>
                </div><br /><br /><br />
              </div>

          }
        </div><br />
        <img className='mx-5 connector' src={process.env.PUBLIC_URL + "/assets/connector.png"} id='connector' alt='connector' width="150" />
        <div className='output_console_card'>
          <h6><b>Result</b></h6>
          {
            id === "img_class" ?
              <div className='result_box'>
                <span className='text-light'>Name: {
                  predictResult.name ? predictResult.name : null
                }
                  {
                    isLoading ? "processing......." : null
                  }

                </span>
                <span className='text-light'>Probability: {
                  isLoading ? "processing........" : predictResult.percentage + "%"
                }</span>
              </div> :
              <div className='result_box'>
                <span className='text-light'>Justin Beiber</span>
              </div>
          }

        </div>
      </div>

      {/* footer */}
      <div className='classific_footer p-3'>
        <SaveButtonComp />
        {
          id === "img_class" ? <MediaButton id="camera" /> : <MediaButton id="mic" />
        }
        {
          isWebcamOpen ?
            <button className='btn text-light px-5 py-2' id='detect_btn' onClick={captureImage}>Capture</button> :
            <button className='btn text-light px-5 py-2' id='detect_btn'>Detect</button>
        }
      </div>

    </div>
  )
}

export default Index;
