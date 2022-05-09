import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { showSidebar, hideSidebar, updateGuideContentFunc } from "../../../Redux/Actions/index";
import '../Sidebar/Index.css';
import 'animate.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';
import $ from 'jquery';

//main function
const Index = () => {
    //creating instance of useDispatch & useSelector
    const dispatch = useDispatch();

    //track redux state
    const sidebarVisibility = useSelector(state => state.sidebarVisibility);

    //sidebar visibility
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    //current navlink content
    const [currentBodyContent, setCurrentBodyContent] = useState();

    //track the changes in redux sidebar state
    useEffect(() => {
        (sidebarVisibility === "hide") ?
            setSidebarVisible(true) : setSidebarVisible(false)
    }, [sidebarVisibility]);

    //two switch
    const SwitchBar = () => {
        return (
            <div className="quick_guide_sidebar_switch">
                <button className="btn py-1">List View</button>
                <button className="btn py-1">Grid View</button>
                <CancelIcon
                    id="closeSidebar"
                    onClick={closeSidebar}
                />
            </div>
        )
    }

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

    //show dropdown of sublist
    $(".quick_guide_sidebar_list #sublist1").css("display", "none");
    $(".quick_guide_sidebar_list #sublist2").css("display", "none");
    $(".quick_guide_sidebar_list #sublist3").css("display", "none");
    $(".quick_guide_sidebar_list #sublist4").css("display", "none");
    $(".quick_guide_sidebar_list #sublist5").css("display", "none");
    $(".quick_guide_sidebar_list #sublist6").css("display", "none");

    const showSubList = (id) => {
        if ($("#sub" + id).css("display") === "none") {
            $("#" + id).css("background", "#ececec");
            $("#arrowIcon" + id[id.length - 1]).css("transform", "rotate(180deg)");
            $(".quick_guide_sidebar_list #sub" + id).css("display", "block");
        } else {
            $("#" + id).css("background", "unset");
            $(".quick_guide_sidebar_list #sub" + id).css("display", "none");
            $("#arrowIcon" + id[id.length - 1]).css("transform", "rotate(0deg)");
        }

        //drop off all the remaining ul
        const currentId = parseInt(id[id.length - 1]);
        for (let i = 1; i <= 6; i++) {
            if (i !== currentId) {
                $("#list" + i).css("background", "unset");
                $(".quick_guide_sidebar_list #sublist" + i).css("display", "none");
            }
        }

        //display id wise content
        if (id === "list1") {
            dispatch(updateGuideContentFunc("GettingStarted"))
        } else if (id === "list2") {
            dispatch(updateGuideContentFunc("Installation"))
        } else if (id === "list3") {
            dispatch(updateGuideContentFunc("Interface"))
        } else if (id === "list4") {
            dispatch(updateGuideContentFunc("Block"))
        } else if (id === "list5") {
            dispatch(updateGuideContentFunc("Code"))
        } else {
            dispatch(updateGuideContentFunc("ML"))
        }
    }

    return (
        <div
            className={
                "quick_guide_sidebar animate__animated animate__slideInLeft animate__faster pt-2 d-" +
                (isSidebarVisible ? "block" : "none")
            }
        >
            <br /><br />
            <SwitchBar /><br /><br />
            <ul className="quick_guide_sidebar_list">
                <li id='list1' onClick={() => showSubList("list1")}>
                    <span>Get started</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon1"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist1'>
                    <li></li>
                </ul>
                <li id='list2' onClick={() => showSubList("list2")}>
                    <span>Installation</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon2"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist2'>
                    <li>How to download and install paradox? </li>
                </ul>
                <li id='list3' onClick={() => showSubList("list3")}>
                    <span>Paradox Interface</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon3"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist3'>
                    <li>Menu Bar</li>
                    <li>Bottom menu bar </li>
                    <li>Side bar  </li>
                    <li>How to create new file ?  </li>
                    <li>How to create new micro ? </li>
                    <li>How to create new script ? </li>
                    <li>How to save project ? </li>
                    <li>How to open saved project ? </li>
                    <li>How to enable /disable extension? </li>
                </ul>
                <li id='list4' onClick={() => showSubList("list4")}>
                    <span>In-built block</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon4"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist4'>
                    <li>Variable block  </li>
                    <li>Slider block  </li>
                    <li>Result block </li>
                    <li>Link-in/ link-out block </li>
                    <li>Code block </li>
                    <li>Node block  </li>
                    <li>Print block  </li>
                    <li>If-Else Block  </li>
                    <li>While-loop block  </li>
                    <li>For-loop block </li>
                </ul>
                <li id='list5' onClick={() => showSubList("list5")}>
                    <span>Code in Paradox</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon5"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist5'>
                    <li>Print "Hello world" </li>
                    <li>Basic operator</li>
                    <li>Selection </li>
                    <li>Iteration </li>
                </ul>
                <li id='list6' onClick={() => showSubList("list6")}>
                    <span>Machine learning block</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon6"
                    />
                </li>
                <ul className='getting_started_sublist' id='sublist6'>
                    <li>Data import block </li>
                    <li>Model block  </li>
                    <li>Predication block </li>
                    <li>Model export block </li>
                    <li>Publish Model Block </li>
                </ul>
            </ul>
        </div>
    )
}

export default Index;