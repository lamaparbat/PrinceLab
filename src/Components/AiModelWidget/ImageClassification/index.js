import React from 'react';
import '../ImageClassification/index.css';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function Index() {
  //custom photo save button comppnent
  const SaveButtonComp = () => {
    return (
      <div className='saveButton btn p-2'>
        <SaveAltIcon className='p-1' id="footer_icon" />
      </div>
    )
  };
  
  //custom camera button component
  const CamerButtonComp = () => {
    return (
      <div className='cameraButton btn p-2'>
        <CameraAltIcon className='p-1' id="footer_icon" />
      </div>
  )
  }
  
  return (
    <div className='imgClassificationCont p-3'>
      
      {/* body */}
      <div className='classific_body'>
        <div className='img_box'>
          <PhotoSizeSelectActualOutlinedIcon id="photoIcon" />
        </div><br/>
        <img className='mx-5 connector' src={process.env.PUBLIC_URL+"/assets/connector.png"} id='connector' alt='connector' width="150" /><br/>
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
        <CamerButtonComp />
        <button className='btn text-light px-5 py-2' id='detect_btn'>Detect</button>
      </div>
      
    </div>
  )
}

export default Index;
