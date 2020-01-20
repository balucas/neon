const initState = {
    error: null,
    regState: null
}

const registerReducer = (state  = initState, action) => {
    switch(action.type){
        case 'REG_ERROR':
                console.log('register error');
                debugger;
                var status = action.err.response.status
                var error;
    
                switch(status){
                    case 401:
                        error = 'Email/Password does not match any user.'
                        break;
                    default:
                        error = 'Unknown error. Contact an admin.'
                        break;
                }
            return {
                ...state,
                error: error
            }
        case 'REG_SUCCESS':
            console.log('register success');
            return {
                ...state,
                regState: 'registered'
            }
        case 'REG_RESET':
            console.log('reset register state')
            return initState
        default:
            return state;
    }
    return state;
}

export default registerReducer;