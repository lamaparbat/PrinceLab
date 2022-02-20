import {combineReducers} from 'redux';
import changeTheme from "./ThemeMode";
import sidebarVisibility from './Sidebar';
import RedirectRoute from "./RedirectRoute";

const rootReducer = combineReducers({
    changeTheme,
    sidebarVisibility,
    RedirectRoute
});

export default rootReducer;
