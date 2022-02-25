import React, {useState} from 'react';
import $ from 'jquery';
import Card from '../Pricing/Card/index.js';
import '../Pricing/index.css';
import ShowMore from '../Pricing/ShowMore/Index';

function Index() {
    const [isMobile, setWidth] = useState(false);
    const [curItem, setCurrentNavClickedItem] = useState();
    const [showMore, setShowMore] = useState(false);

    const list1 = ["Support for python", "Programming", "Able to make AI mode", "New update"];
    const list2 = ["Support For Python3 Programming", "Able to make flutter app", "AI model integration", "Application development", "Technical support", "New updates"];

    // track the width of screen
    $(window).resize(() => {
        window.innerWidth < 360 ? setWidth(true) : setWidth(false)
        console.log(isMobile)
    })

    //pricing nav component
    const Pricing_Nav = () => {
        //on nav item clicked
        const navClick = (item) => {
            setCurrentNavClickedItem(item);
            showMore === true ? setShowMore(false): setShowMore(true);
        }

        return (
            <div className={"pricing_nav d-" + (isMobile ? "block " : "flex")}>
            <p
                onClick={() => navClick("item1")}
                className={"bg-" + (curItem === "item1" ? "dark text-white" : "unset")}
            >
                {(curItem === "item1" && showMore === true ? "Show Less" : "Show More")}
            </p>
            <p
                className={"bg-" + (curItem === "item2" ? "dark text-white" : "unset")}
                onClick={() => navClick("item2")}

            >Free</p>
            <p
                className={"bg-" + (curItem === "item3" ? "dark text-white" : "unset")}
                onClick={() => navClick("item3")}
            >Professional</p>
        </div>)
    }

    //show nav on btn click

    return (
        <div className={'container pricing'}>
            <div className="pricing_card_rows">
                <Card
                    bg="success"
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
                    price="$"
                    title="For organizations and companies"
                    list={list2}
                    bottom_btn="Contact us"
                />
            </div>
            <center><h3 className="py-3">Compare plans</h3></center>
            <div
                className={"pricing_navigation"}>
                <Pricing_Nav/>
            </div>
            <br/><br/>
            {
                (curItem === "item1" && showMore === true) ? <ShowMore /> : null
            }
        </div>)
}

export default Index
