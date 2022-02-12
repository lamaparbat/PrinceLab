import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../TopNav/index.css';

function Index() {
  const route = useLocation().pathname;
  const navigate = useNavigate();
  
  // onclick
  const redirect = (id) => {
    if (id === "store") {
      navigate("/Store")
    } else if (id === "aistore") {
      navigate("/AiStore")
    } else if (id === "extension") {
      navigate("/Extension")
    } else if (id === "block") {
      navigate("/Block")
    } else {
      navigate("/Store")
    }
  }
  
  return (
   <div className='container-fluid store_nav bg-secondary'>
      <span
        className={"bg-" + (route === "/Store" ? "dark" : null)}
        onClick={() => redirect("store")}
      >App Store</span>
      <span
        onClick={() =>redirect("aistore")}
        className={"bg-" + (route === "/AiStore" ? "dark" : null)}
      >AI Store</span>
      <span
        onClick={() =>redirect("extension")}
        className={"bg-" + (route === "/Extension" ? "dark" : null)}
      >Extension</span>
      <span
        onClick={() =>redirect("block")}
        className={"bg-" + (route === "/Block" ? "dark" : null)}
      >Block</span>
   </div>
  )
}

export default Index