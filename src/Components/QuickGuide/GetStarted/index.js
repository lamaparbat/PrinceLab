import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../GetStarted/index.css';
import MenuIcon from '@mui/icons-material/Menu';
import { showSidebar, hideSidebar } from "../../../Redux/Actions/index";
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
 
 return (
  <div className="container getStarted pt-5">
   <div className='getStartedRow px-4 pt-3'>
    <MenuIcon className='btn p-0' onClick={changeSidebar} /><br/><br/>
    <h3 className='bold'>Documentation Title</h3>
    <span>Documentation sub title</span>
    <p className='p-3 para1'>Outdoor air pollution is a risk factor for several of the world’s leading causes of death, including stroke, heart disease,
     lung cancer, and respiratory diseases, such as asthma. According to the Global Burden of Disease study 3.4 million people
     died prematurely in 2017 due to outdoor air pollution and 3.8 million deaths due to indoor pollution. There are two local air
     pollutants which can have adverse health impacts: ozone and particulate matter. Death rates from particulate matter
     pollution tend to be higher than that of ozone. Tropospheric ozone which exists in the lower atmosphere, close to the
     surface which is essential in protecting us from UV radiation. Local ozone close to the surface is often termed ‘bad ozone’
     and contrasted with the ‘good ozone’ in the ozone layer</p><br/>
    <h3 className='bold'>Code demonstration</h3>
    <p className='p-3 para1'>Outdoor air pollution is a risk factor for several of the world’s leading causes of death, including stroke, heart disease,
     lung cancer, and respiratory diseases, such as asthma.</p><br/>
    <h3 className='bold'>Image demonstration</h3>
    <div className='img_containers'>
     <img className='img' src={process.env.PUBLIC_URL + "/assets/agriculture.png"} />
     <img className='img' src={process.env.PUBLIC_URL + "/assets/space.png"} />
    </div>
   </div>
  </div>
 )
}

export default Index;