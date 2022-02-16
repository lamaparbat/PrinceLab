import React, {useEffect} from 'react';
import '../Body/Index.css';
import {useSelector, useDispatch} from "react-redux";
import {showSidebar, hideSidebar} from "../../../Redux/Actions";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

//main function
const Index = () => {
    //create the instance of useDispatch & useSelectore
    const dispatch = useDispatch()
    const sidebarVisibility = useSelector(state => state.sidebarVisibility)

    return (
        <div className="quick_guide_body px-4 py-3 w-100">
            <MenuOpenIcon
                className={"btn p-0 animate__animated animate__slideInLeft "+(sidebarVisibility != "hide" ? "d-none":"d-block")}
                onClick={() => dispatch(showSidebar())}/>
        </div>
    )
}

export default Index;