const initState = {
    error: null,
    regState: null
}

const registerReducer = (state  = initState, action) => {
    switch(action.type){
        case 'REG_ERROR':
                console.log('register error');

                var errText = ''
                switch(action.res.constraint){
                    case 'missing_field':
                        errText = 'Error: Missing fields'
                        break
                    case '_bt_check_unique':
                        errText = 'Email is already taken. Try another.'
                        break
                    default:
                        errText = 'Unknown Error. Try again'
                        break
                }
            return {
                ...state,
                error: errText
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