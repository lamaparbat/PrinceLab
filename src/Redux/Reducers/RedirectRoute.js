const initialState = ""

const RedirectRoute = (state= initialState, action) => {
    switch (action.type){
        case "Login" : return "Login";
        default : return state;
    }
}

export default RedirectRoute;