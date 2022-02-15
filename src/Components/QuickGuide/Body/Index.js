import React from 'react';
import '../Body/Index.css';
import {useSelector,useDispatch} from "react-redux";
import {showSidebar, hideSidebar} from "../../../Redux/Actions";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

//main function
const Index = () => {
    //create the instance of useDispatch & useSelectore
    const dispatch = useDispatch()
    const sidebarVisibility =  useSelector(state => state.sidebarVisibility)

    //visible the sidebar
    const showSidebar = () => {
        sidebarVisibility != "hide" ?
            dispatch(hideSidebar()):dispatch(showSidebar())
    }

    return(
        <div className="quick_guide_body  w-100">
            <MenuOpenIcon onClick={showSidebar} />
        </div>
    )
}

export default Index;