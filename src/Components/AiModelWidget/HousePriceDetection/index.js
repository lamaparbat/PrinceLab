import React from 'react';
import '../HousePriceDetection/index.css';

function Index() {
 //custom features input
 const FeaturesInput = () => {
  return (
   <div className='features_input p-4 bg-dark'>
    <h5>Features</h5><br/>
    <div className='room_field'>
     <font>No. of rooms</font>
     <input type="number" className='form-control' id='rooms'/>
    </div><br/>
    <div className='room_field'>
     <font>Area</font>
     <input type="text" className='form-control' id='rooms' />
    </div><br/>
    <div className='room_field'>
     <font>Location</font>
     <input type="address" className='form-control' id='rooms' />
    </div><br/>
    <button className='btn py-2 px-5 w-100' id='predict_btn'>Predict</button>
   </div>
  )
 }

 //custom output console
 const OutputConsole = () => {
  return (
   <div className='output_console_card'>
    <h6><b>Result</b></h6>
      <div className='result_box'>
       <span className='text-light'>pneumsdonia, jaundice</span>
      </div> 
   </div>
  )
 }

 return (
  <div className='HousePrediction px-4'>
     <FeaturesInput />
     <img className='mx-5 connector' src={process.env.PUBLIC_URL + "/assets/connector.png"} id='connector' alt='connector' width="150" />
   <OutputConsole />
  </div>
 )
}

export default Index;
