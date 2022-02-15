//initial state
const initialState = "light";

//change the background theme
const changeTheme = (state = initialState,  action) => {
    switch(action.type){
        case "dark":
            return action.type;
        case "light":
            return action.type;
        default:
            return "light";
    }
}

export default changeTheme;