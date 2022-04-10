import React from 'react';
import '../QuickGuide/Index.css';
import Sidebar from '../QuickGuide/Sidebar/Index';
import GetStarted from '../QuickGuide/GetStarted/index';

//main function
const Index = () => {
    return (
        <div className={"quick_guide"}>
            <Sidebar/>
            <GetStarted />
        </div>
    )
}

export default Index;