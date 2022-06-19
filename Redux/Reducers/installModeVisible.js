const initialState = false

const installModelVisible = (state= initialState, action) => {
    switch (action.type){
        case "hide" : return {
            ...action.payload,
            show:false
        };
        case "open" : return {
            ...action.payload,
            show:true
        };
        default : return state;
    }
}

export default installModelVisible;