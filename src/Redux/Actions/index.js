//theme operation
export const darkTheme = () => {
    return {
        type: "dark"
    }
}

export const lightTheme = () => {
    return {
        type: "light"
    }
}


//sidebar operation
export const showSidebar = () => {
    return {
        type:"show"
    }
}

export const hideSidebar = () => {
    return {
        type:"hide"
    }
}


// destine route -> redirect to the destine roote after login
export const redirectDestineRoute = (route) => {
    return{
        type:route,
        payload: route
    }
}


// show discover install popup model
export const openInstallModel = () =>{
    return{
        type: "open"
    }
}
// hide discover install popup model
export const hideInstallModel = () =>{
    return{
        type: "hide"
    }
}