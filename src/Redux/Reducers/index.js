import {combineReducers} from 'redux';
import changeTheme from "./ThemeMode";
import sidebarVisibility from './Sidebar';
import RedirectRoute from "./RedirectRoute";
import installModelVisible from "./installModeVisible";

const rootReducer = combineReducers({
    changeTheme,
    sidebarVisibility,
    RedirectRoute,
    installModelVisible
});

export default rootReducer;
