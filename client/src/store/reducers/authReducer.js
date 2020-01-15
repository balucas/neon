const initState = {
    authError: null,
    authState: null
}

const authReducer = (state  = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error ', action.err);

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
                authError: error
            }
        case 'LOGIN_SUCCESS':
            var data = action.res.data;
            console.log('login success');
            localStorage.setItem('JWT', data.token);
            return {
                ...state,
                authError: null,
                authState: data.user
            }
        default:
            return state;
    }
    return state;
}

export default authReducer;