import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import styles from '../styles/Download/index.module.css';
import Premium from "../Components/Homepage/premium";
import { redirectDestineRoute } from "../Redux/Actions/index";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";

const Index = () => {
 //creating instance of useDispatch()  -> redux
 const dispatch = useDispatch();

 //creating instance of useNavigate four route pushing
 const navigate = useRouter();
 //auto scroll to the top when page rendered
 useEffect(() => {
  $(window).scrollTop({ top: 0, behavior: "smooth" });
 }, [])

 // all the mac & windows features in list
 const [mac_features, setMac] = useState([
  "Processor: 2 GHz / M1(recommended)",
  "RAM: 8 GB",
  "Storage: 8 GB",
  "OS: OS X 10 or recent version"]);
 const [windows_features, setWindows] = useState([
  "Processor: 2 ghz",
  "RAM: 8 GB",
  "Storage: 10 GB",
  "OS: Windows 10 or later"]);

 //custom card box
 const Card = ({ bg, src, btn_text }) => {
  //verify the user
  const auth = async (type) => {
   try {
    if (localStorage.getItem("princelab") !== "null" && localStorage.getItem("princelab") !== "") {
     if (type !== "MAC") {
      toast.info("Download started...");
      await window.location.assign("https://www.dropbox.com/s/7u6655dcwxiiu7i/paradox%20installer.zip?dl=1");
      return;
     } else {
      toast.info("Download started...");
      // add the new url inside double quotes of below code and uncomment it
      await window.location.assign("https://www.dropbox.com/s/pweao3c4o9col8d/Paradox.zip?dl=1");
      return;
     }
    } else {
     dispatch(redirectDestineRoute("Download"))
     navigate.push("/Login")
    }
   } catch (error) {
    console.log(error)
   }
  }
  return (
   <div className={styles.downloads_box_card}>
    {
     btn_text === "MAC" ?
      <div className={styles.beta_container+' w-100 d-flex justify-content-end'}>
       <span className='bg-success' id={styles["beta_text"]}>Beta</span>
      </div> : null
    }
    <img
     className='p-3'
     src={src} />
      <button className={"btn text-white my-3 rounded-pill w-50 btn-" + bg + " " + bg} id={styles[bg]}>
     {btn_text}
    </button>
    <div className={styles.downloads_box_card_content}>
     {
      btn_text != "MAC" ?
       windows_features.map((data, index) => {
        return <span key={index}>{data}</span>
       }) :
       mac_features.map((data, index) => {
        return <span key={index}>{data}</span>
       })
     }
    </div>
    <button
     className={"btn btn-primary text-white my-3 w-100 btn-" + bg + " " + bg}
     id={btn_text}
     onClick={() => auth(btn_text)}
    >
     Download
    </button>
   </div>
  )
 }
 return (
  <>
     <div className={styles.downloads}>
       <Head>
         <title>Princelab/Download</title>
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta
           name='description'
           content='Try paradox for premium.Processor: 2 GHz / M1(recommended) RAM: 8 GB.Get started using paradox with a 30-day free trail Join our developer team to get the latest news and updates'
           key="desc"
         />
         <meta
           name='keywords'
           content='RAM,GHz,Storage,GB,Windows,MAC,Processor,OS,Version,Download,Premium'
         />
         <meta name="author" content="Prince kumar singh" />
       </Head>
    <div className={styles.downloads_box}>
     <Card
      bg="primary"
      src={ "/assets/mac.png"}
      btn_text="MAC"
     />
     <Card
      bg="info"
      src={"/assets/windows.svg"}
      btn_text="WINDOWS"
     />
    </div>
    <br /><br />
    <Premium />
    <ToastContainer position="top-center" />
   </div>
  </>
 )
}
export default Index;