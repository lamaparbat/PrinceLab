import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../QuickGuide/Index.css';
import Sidebar from '../QuickGuide/Sidebar/Index';
import GetStarted from '../QuickGuide/GetStarted/index';
import InstallGuide from '../QuickGuide/Body/Installation/index';
import InterfaceGuide from '../QuickGuide/Body/Interface/index';
import BlockGuide from '../QuickGuide/Body/Block/index';
import CodeGuide from '../QuickGuide/Body/Code/index';
import MLGuide from '../QuickGuide/Body/ML/index';

//main function
const Index = () => {
    //track redux state changes
    const currentContentID = useSelector(state => state.updateGuideContent);
    
    
    return (
        <div className={"quick_guide"}>
            <Sidebar/>
            {
                currentContentID === "GettingStarted" ? <GetStarted /> : null
            }
            {
                currentContentID === "Installation" ? <InstallGuide /> : null
            }
            {
                currentContentID === "Interface" ? <InterfaceGuide /> : null
            }
            {
                currentContentID === "Block" ? <BlockGuide /> : null
            }
            {
                currentContentID === "Code" ? <CodeGuide /> : null
            }
            {
                currentContentID === "ML" ? <MLGuide /> : null
            }
        </div>
    )
}

export default Index;