const initialState = ""

const RedirectRoute = (state= initialState, action) => {
    switch (action.type){
        case "Login" : return action.payload;
        default : return action.payload;
    }
}