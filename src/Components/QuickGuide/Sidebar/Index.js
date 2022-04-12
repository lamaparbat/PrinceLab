import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {showSidebar, hideSidebar} from "../../../Redux/Actions/index";
import '../Sidebar/Index.css';
import 'animate.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';

//main function
const Index = () => {
    //creating instance of useDispatch & useSelector
    const dispatch = useDispatch();
    
    //get the visibility status from redux store
    const sidebarVisibility = useSelector(state => state.sidebarVisibility);

    //sidebar visibility
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    //track the changes in redux sidebar state
    useEffect(() => {
       (sidebarVisibility === "hide") ?
            setSidebarVisible(true) : setSidebarVisible(false)
    }, [sidebarVisibility])

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
        if(isSidebarVisible === false){
            setSidebarVisible(true);
            // //update the redux store
            dispatch(showSidebar())
        }else{
            setSidebarVisible(false);
            //update the redux store
            dispatch(hideSidebar())
        }
    }

    return (
        <div
            className={
                "quick_guide_sidebar animate__animated animate__slideInLeft animate__faster pt-2 d-"+
               ( isSidebarVisible ? "block" : "none")
            }
        >
            <br/><br/>
            <SwitchBar/><br/><br/>
            <ul className="quick_guide_sidebar_list">
                <li>
                    <span>Get started</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>Installation</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>User Interface</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>Development</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>Accessing Code</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>Packages</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
                <li>
                    <span>Tools & features</span>
                    <KeyboardArrowDownIcon
                        id="arrowIcon"
                    />
                </li>
            </ul>
        </div>
    )
}

export default Index;