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
        type:"Login",
        payload: route
    }
}