const initialState = ""

const RedirectRoute = (state= initialState, action) => {
    switch (action.type){
        case "Download" : return "Download";
        default : return state;
    }
}

export default RedirectRoute;