const initialState = false

const installModelVisible = (state= initialState, action) => {
    switch (action.type){
        case "hide" : return false;
        case "open" : return true;
        default : return state;
    }
}

export default installModelVisible;