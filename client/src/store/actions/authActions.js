import axios from 'axios';

export const signIn = (credentials) => {
    const email = credentials.email;
    const password = credentials.password;
    return (dispatch) => {
        return axios.post('http://localhost:9000/auth/login',
            {
                email, 
                password
            })
            .then((res) => {
                if(!res.data.auth){
                    debugger;
                    var err = res.message
                    dispatch({type: 'LOGIN_ERROR', err});
                }else{
                    dispatch({type: 'LOGIN_SUCCESS', res });
                }
            }).catch((err) => {
                debugger;
                dispatch({ type: 'LOGIN_ERROR', err});
            })      
    }
}
