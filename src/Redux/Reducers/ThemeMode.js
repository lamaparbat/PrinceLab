//initial state
const initialState = "unset";

//change the background theme
const changeTheme = (state = initialState,  action) => {
    switch(action.type){
        case "dark":
            return action.type;
        case "light":
            return action.type;
        default:
            return initialState;
    }
}

export default changeTheme;