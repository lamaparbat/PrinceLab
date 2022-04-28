import React from 'react';
import '../ImageClassification/index.css';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

function Index({id}) {
  
  //custom photo save button comppnent
  const SaveButtonComp = () => {
    return (
      <div className='saveButton btn p-2'>
        <SaveAltIcon className='p-1' id="footer_icon" />
      </div>
    )
  };
  
  //custom camera button component
  const MediaButton = ({id}) => {
    return (
      <div className='cameraButton btn p-2'>
        {
          id === "camera" ? <CameraAltIcon className='p-1' id="footer_icon" /> : <MicOutlinedIcon className='p-1' id="footer_icon" />
        }
      </div>
  )
  }
  
  return (
    <div className='imgClassificationCont p-3'>
      
      {/* body */}
      <div className='classific_body'>
        <div className='img_box'>
          
        {
            id === "img_class" ?
              <PhotoSizeSelectActualOutlinedIcon id="photoIcon" /> :
              <div className='content'>
                <h5>Recorded List</h5>
                <div className='audio_name mt-3 px-5 bg-dark d-flex justify-content-between align-items-center'>
                  <AudioFileOutlinedIcon className='p-2' />
                  <font>radiohead.mp3</font>
                </div><br /><br /><br />
                <button className='btn text-light w-100 px-5 py-1' id='detect_btn'>Detect</button>
              </div>

        }
        </div><br />
        <img className='mx-5 connector' src={process.env.PUBLIC_URL+"/assets/connector.png"} id='connector' alt='connector' width="150" />
        <div className='output_console_card'>
          <h6><b>Result</b></h6>
          <div className='result_box'>
            <span className='text-light'>pneumsdonia, jaundice</span>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='classific_footer p-3'>
        <SaveButtonComp />
        
        {
          id === "img_class" ? <MediaButton id="camera" /> : <MediaButton id="mic" />
        }
        <button className='btn text-light px-5 py-2' id='detect_btn'>Detect</button>
      </div>
      
    </div>
  )
}

export default Index;
