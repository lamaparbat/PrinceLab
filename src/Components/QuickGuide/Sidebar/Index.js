import React from 'react';
import '../Sidebar/Index.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//main function
const Index = () => {
    //two switch
    const SwitchBar = () => {
        return (
            <div className="quick_guide_sidebar_switch">
                <button className="btn py-1">List View</button>
                <button className="btn py-1">Grid View</button>
            </div>
        )
    }

    return(
        <div className="quick_guide_sidebar pt-5">
            <SwitchBar /><br/><br/>
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