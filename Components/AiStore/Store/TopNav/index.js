import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../../styles/AiStore/Store/TopNav/index.module.css';

function Index() {
  const route = useRouter().pathname;
  const navigate = useRouter();
  
  // onclick
  const redirect = (id) => {
    if (id === "store") {
      navigate.push("/Store")
    } else if (id === "aistore") {
      navigate.push("/AiStore")
    } else if (id === "extension") {
      navigate.push("/Extension")
    } else if (id === "block") {
      navigate.push("/Block")
    } else {
      navigate.push("/Store")
    }
  }
  
  return (
    <div className={'container bg-secondary ' + styles.store_nav}>
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