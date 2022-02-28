import React, {useState} from 'react';
import './index.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import CheckIcon from '@mui/icons-material/Check';


function Index(props) {
  //final payment data
  const [paymentDetails, setPaymentDetails ] = useState({
    type: "",
    amount:0,
  })

  //create instance of useNavigate
  const navigate = useNavigate();

  //auth check
  const auth = (type) => {
    type === "Professional" ? navigate("/Payment"): toast.info("In progress......")
  }

  return (
    <>
      <div className='business py-5 mx-4 my-4'>
        <center>
          <button
              className={'btn top_btn px-5 rounded-1 ' +( props.bg != "success" ? "bg-"+props.bg: "")}
              style={(props.bg === "success" ? {backgroundColor:'#FF9E2C'}: null)}
          >{props.top_btn}</button>
        </center>
        <div className='business_content'>
          <h1 id='price'>{props.price !="custom" ?
              <>
                {props.price}
                <span id='month_name'> /monthly</span>
              </>
              : props.price}</h1>
          <p>{props.title}</p>
          <div className='separator mt-1 mb-4'></div>
          <div className='feature_list'>
            {
              props.list.map((item, index) => {
                return (
                  <>
                    <div id='li' key={index+1}>
                      <CheckIcon key={index+2}  id='icon' className={( props.bg != "success" ? "bg-"+props.bg: "")}
                                 style={(props.bg === "success" ? {backgroundColor:"#FF9E2C"}: null)} />
                      <p className='mx-3' key={index+3}>{item}</p>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>
        <center>
          <button
              className={'btn px-5 rounded-1 '+( props.bg != "success" ? "bg-"+props.bg: "")}
              style={(props.bg === "success" ? {backgroundColor:"#FF9E2C"}: null)}
              onClick={() => auth(props.top_btn)}
          >{props.bottom_btn}</button>
        </center><br/>
        <ToastContainer position="top-center" />
      </div>
    </>);
}

export default Index;
