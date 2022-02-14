import React, {useState} from 'react';
import Card from '../Pricing/Card/index.js';
import '../Pricing/index.css';
import $ from 'jquery';

function Index() {
    const [isMobile, setWidth] = useState(false);

    const list1 = ["Support for python", "Programming", "Able to make AI mode", "New update"];
    const list2 = ["Support For Python3 Programming", "Able to make flutter app", "AI model integration", "Application development", "Technical support", "New updates"];

    // track the width of screen
    $(window).resize(() => {
        window.innerWidth < 360 ? setWidth(true) : setWidth(false)
        console.log(isMobile)
    })

    //pricing nav component
    const Pricing_Nav = () => {
        return (
            <div
                className={
                    "pricing_nav d-" +
                    (isMobile ? "block " : "flex")
                }
            >
                <p>Show More</p>
                <p>Free</p>
                <p>Professional</p>
            </div>)
    }

    //show nav on btn click

    return (<div className='container pricing'>
        <div className="pricing_card_rows">
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
                bottom_btn="Purchase"
            />

            <Card
                bg="dark"
                top_btn="Business"
                price="$10"
                title="For organizations and companies"
                list={list2}
                bottom_btn="Purchase"
            />
        </div>
        <center><h3 className="py-3">Compare plans</h3></center>
        <div
            className={
                "pricing_navigation d-"
            }>
            <Pricing_Nav/>
        </div>

    </div>)
}

export default Index
