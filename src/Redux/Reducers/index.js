import {combineReducers} from 'redux';
import changeTheme from "./ThemeMode";
import sidebarVisibility from './Sidebar';
import RedirectRoute from "./RedirectRoute";
import installModelVisible from "./installModeVisible";
import updateGuideContent from './updateGuideContent';

const rootReducer = combineReducers({
    changeTheme,
    sidebarVisibility,
    RedirectRoute,
    installModelVisible,
    updateGuideContent,
});

export default rootReducer;
