import {combineReducers} from 'redux';
import changeTheme from "./ThemeMode";
import sidebarVisibility from './Sidebar';

const rootReducer = combineReducers({
    changeTheme,
    sidebarVisibility
});

export default rootReducer;
