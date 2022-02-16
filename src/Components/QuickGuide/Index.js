import React from 'react';
import '../QuickGuide/Index.css';
import Sidebar from '../QuickGuide/Sidebar/Index';
import Body from '../QuickGuide/Body/Index';

//main function
const Index = () => {
    return (
        <div className={"quick_guide"}>
            <Sidebar/>
            <Body/>
        </div>
    )
}

export default Index;