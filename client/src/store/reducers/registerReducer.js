const initState = {
    error: null,
    regState: null
}

const registerReducer = (state  = initState, action) => {
    switch(action.type){
        case 'REG_ERROR':
                console.log('register error');
                debugger;
            return {
                ...state,
                error: 'Registration failed'
            }
        case 'REG_SUCCESS':
            console.log('register success');
            debugger;
            return {
                ...state,
                regState: 'registered'
            }
        case 'REG_RESET':
            return initState
        default:
            return state;
    }
    return state;
}

export default registerReducer;