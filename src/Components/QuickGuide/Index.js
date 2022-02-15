import React from 'react';
import {useSelector} from "react-redux";
import '../QuickGuide/Index.css';
import Sidebar from '../QuickGuide/Sidebar/Index';
import Body from '../QuickGuide/Body/Index';
import sidebarVisibility from "../../Redux/Reducers/Sidebar";

//main function
const Index = () => {
    //get the sidebar visibility status
    const isSidebarVisible = useSelector((state) => state.sidebarVisibility)
    console.log(isSidebarVisible)
    return (
        <div className={"quick_guide"}>
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default Index;