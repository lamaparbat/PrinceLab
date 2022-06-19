import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import $ from 'jquery';
import Card from '../Components/Pricing/Card/index';
import styles from '../styles/Pricing/Pricing.module.css';
import ShowMore from '../Components/Pricing/ShowMore';

function Index() {
 const [isMobile, setWidth] = useState(false);
 const [curItem, setCurrentNavClickedItem] = useState();
 const [showMore, setShowMore] = useState(false);

 //create instanc ef useNavigate
 const navigate = useRouter()

 //auto scroll to the top when page rendered
 useEffect(() => {
  $(document).scrollTop({ top: 0, behavior: "smooth" })
 }, [])

 const list1 = ["Support for python", "Programming", "Able to make AI mode", "New update"];
 const list2 = ["Support For Python3 Programming", "Able to make flutter app", "AI model integration", "Application development", "Technical support", "New updates"];


 // track the width of screen
 // $(document).resize(() => {
 //  window.innerWidth < 360 ? setWidth(true) : setWidth(false)
 // })

 //pricing nav component
 const Pricing_Nav = () => {
  //on nav item clicked
  const navClick = (item) => {
   setCurrentNavClickedItem(item);
   showMore === true ? setShowMore(false) : setShowMore(true);
  }

  return (
   <div className={styles.pricing_nav+" d-" + (isMobile ? "block " : "flex")}>
    <p
     onClick={() => navClick("item1")}
     className={"bg-" + (curItem === "item1" ? "text-white" : "unset")}
    >
     {(curItem === "item1" && showMore === true ? "Show Less" : "Show More")}
    </p>
    {
     showMore === true ?
      <>
       <p
        className={"bg-" + (curItem === "item2" ? "dark text-white" : "unset")}
        onClick={() => navClick("item2")}

       >Free</p>
       <p
        className={"bg-" + (curItem === "item3" ? "dark text-white" : "unset")}
        onClick={() => navClick("item3")}
       >Professional</p>
      </> : null
    }
   </div>)
 }

 //show nav on btn click

 return (
   <div className={'container ' + styles.pricing}>
    <div className={styles.pricing_card_rows}>
     <Card
      bg="warning"
      top_btn="Community"
      price="$0"
      title="Free for both individual and teams "
      list={list1}
      bottom_btn="Start for free"
     />
     <Card
      bg="primary"
      top_btn="Professional"
      price="$10"
      title="Available for both individual and teams "
      list={list2}
      bottom_btn="Upgrade"
     />

     <Card
      bg="dark"
      top_btn="Business"
      price="custom"
      title="For organizations and companies"
      list={list2}
      bottom_btn="Contact us"
     />
    </div>
    <center><h3 className="py-3">Compare plans</h3></center>
    <div
     className={styles.pricing_navigation}>
     <Pricing_Nav />
    </div>
    <br /><br />
    {
     (curItem === "item1" && showMore === true) ? <ShowMore /> : null
    }
   </div>

 )
}

export default Index
