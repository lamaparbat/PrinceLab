import React, {useState} from 'react';
import styles from '../../../styles/Pricing/Card/index.module.css'
import {useRouter} from "next/router";
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
  const navigate = useRouter();

  //auth check
  const auth = (type) => {
    if(type === "Professional"){
      JSON.parse(localStorage.getItem("princelab")) != null && JSON.parse(localStorage.getItem("princelab")).username !==""
          ? navigate.push("/Payment") : navigate.push("/Login")
    }else{
      toast.info("In progress......")
    }
  }

  return (
    <>
      <div className={styles.business+' py-5 mx-4 my-4'}>
        <center>
          <button
            className={styles.top_btn+' btn text-light px-5 rounded-1 bg-' +props.bg}
              style={(props.bg === "success" ? {backgroundColor:'#FF9E2C'}: null)}
          >{props.top_btn}</button>
        </center>
        <div className={styles.business_content}>
          <h1 id={styles["price"]}>{props.price !="custom" ?
              <>
                {props.price}
              <span id={styles["month_name"]}> /monthly</span>
              </>
              : props.price}</h1>
          <p>{props.title}</p>
          <div className={styles.separator+' mt-1 mb-4'}></div>
          <div className={styles.feature_list}>
            {
              props.list.map((item, index) => {
                return (

                    <div id={styles["li"]} key={index+1}>
                      <CheckIcon key={index + 2} id={styles["tickIcons"]} className={"bg-" + props.bg} />
                      <p className='mx-3' key={index+3}>{item}</p>
                    </div>
    
                )
              })
            }

          </div>
        </div>
        <center>
          <button
              className={'btn px-5 text-light rounded-1 bg-'+props.bg}
              onClick={() => auth(props.top_btn)}
          >{props.bottom_btn}</button>
        </center><br/>
        <ToastContainer position="top-center" />
      </div>
    </>);
}

export default Index;
