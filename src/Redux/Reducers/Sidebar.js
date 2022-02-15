const initialState = "show";

const sidebarVisibility = (state = initialState, action) =>{
    switch (action.type){
        case "show":
            return action.type;
        case "hide":
            return action.type;
        default:
            return "show";
    }
}

export default sidebarVisibility;
