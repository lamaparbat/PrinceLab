import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { showSidebar, hideSidebar } from "../../Redux/Actions/index";
import { Cancel, MenuOutlined} from '@mui/icons-material';
import '../AiPreview/index.css';
import $ from 'jquery';
import { Menu } from '@mui/material';
import TextToxicityPrediction from '../AiModelWidget/TextToxicityPrediction/index'
import ImageClassification from '../AiModelWidget/ImageClassification/index';
import GestureDetection from '../AiModelWidget/GestureDetection/index';
import FaceDetection from '../AiModelWidget/FaceDetection/index';


function Index() {  
  //creating instance of useDispatch & useSelector
  const dispatch = useDispatch();
  
  //track redux state
  const sidebarVisibility = useSelector(state => state.sidebarVisibility);

  //sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  //track the changes in redux sidebar state
  useEffect(() => {
    (sidebarVisibility === "hide") ?
      setSidebarVisible(true) : setSidebarVisible(false)
  }, [sidebarVisibility]);
  
  //current selected navlink state
  const [selectedNav, setSelectedNav] = useState("home");
  
  //sidebar component
  const Sidebar = () => {
   //close sidebar
    const closeSidebar = () => {
      if (isSidebarVisible === false) {
        setSidebarVisible(true);
        // //update the redux store
        dispatch(showSidebar())
      } else {
        setSidebarVisible(false);
        //update the redux store
        dispatch(hideSidebar())
      }
    }
    
    //click on navlink
    const selectNavLink = (id) => {
      if (id === "link1") {
        setSelectedNav("link1");
      } else if (id === "link2") {        
        setSelectedNav("link2");
      } else if (id === "link3") {
        setSelectedNav("link3");
      } else if (id === "link4") {
        setSelectedNav("link4");
      } else if (id === "home") {
        setSelectedNav("home")
      }
    }
    
    return (
      <div className={'previewSidebar pt-5 px-4 d-'+ (isSidebarVisible ? "flex" : "none") }>
        <div className='brand'>
          <h4 id='brand_title'><b>Ai Preview Type</b></h4>
          <Cancel className='btn p-0 cancleIcon' onClick={closeSidebar}/>
        </div><br /><br />
        <span id='link1' onClick={() => selectNavLink("home")} style={selectedNav === "home" ? { backgroundColor: "#028AFF" } : null}>Dashboard</span>
        <span id='link1' onClick={() => selectNavLink("link1")} style={selectedNav === "link1" ? { backgroundColor:"#028AFF"}:null}>Classification</span>
        <span id='link2' onClick={() => selectNavLink("link2")} style={selectedNav === "link2" ? { backgroundColor: "#028AFF" } : null}>Regression</span>
        <span id='link3' onClick={() => selectNavLink("link3")} style={selectedNav === "link3" ? { backgroundColor: "#028AFF" } : null}>Detection</span>
        <span id='link4' onClick={() => selectNavLink("link4")} style={selectedNav === "link4" ? { backgroundColor: "#028AFF" } : null}>Regression</span>
      </div>
    )
  }
  
  //custom body card component
  const Card = ({title, src}) => {
    return (
      <div className='previewBodyCard'>
        {
          title === "Text Toxicity" ?
            <img
              className='img-fluid mt-4'
              src={src}
              alt="cardImg"
              height="80"
              width="80"
              loading='lazy' /> :
            title === "Question Answering" ?
              <img
                className='img-fluid mt-4'
                src={src}
                alt="cardImg"
                height="100"
                width="100"
                loading='lazy' /> :
              <img
                className='img-fluid'
                height="150"
                width="150"
                src={src}
                alt="cardImg"
                loading='lazy' />
        }
        <h6 id='card_title'>{title}</h6>
      </div>
  )
  }
  
  //custom body component
  const Body = () => {
    //action dispatcher
    const dispatch = useDispatch();

    //track redux state
    const sidebarVisibility = useSelector(state => state.sidebarVisibility);

    //close or open sidebar
    const openSidebar = () => {
      if (sidebarVisibility === "hide") {
        // //update the redux store
        dispatch(showSidebar())

      } else {
        //update the redux store
        dispatch(hideSidebar())
      }
    }
    return (
      <div className='previewBody px-4'>
        <MenuOutlined className='btn p-0 openSidebarIcon' onClick={openSidebar} />

        {
          selectedNav === "link1" ? <ImageClassification id="img_class" /> :
            selectedNav === "link2" ? <TextToxicityPrediction /> :
              selectedNav === "link3" ? <FaceDetection /> :
                selectedNav === "link4" ? <GestureDetection /> :
                  <>
                    <div className='card_rows'>
                      <Card title="Image Classification" src={process.env.PUBLIC_URL + "/assets/camera.png"} />
                      <Card title="Face Motion Detection" src={process.env.PUBLIC_URL + "/assets/gesture.png"} />
                    </div>
                    <div className='card_rows'>
                      <Card title="Question Answering" src={process.env.PUBLIC_URL + "/assets/sound.png"} />
                      <Card title="Text Toxicity" src={process.env.PUBLIC_URL + "/assets/house.png"} />
                    </div>
                  </>
        }
      </div>
)
  }
  
  return (
    <div className={'aiPreviewCont'}>
      <div className='rows'>
        <Sidebar />
        <Body />
      </div>
    </div>
  )
}

export default Index
