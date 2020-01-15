import axios from 'axios';

export const signIn = (credentials) => {
    const email = credentials.email;
    const password = credentials.password;
    return (dispatch) => {
        // return fetch("http://localhost:9000/testLogin/loginUser", 
        //     {
        //         method: 'POST',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         data: JSON.stringify(credentials)
        //     })
        return axios.post('http://localhost:9000/testLogin/loginUser',
            {
                email, 
                password
            })
            // .then(res => {
            //     debugger;
            //     res.text();
            // })
            .then((res) => {
                // res = JSON.parse(res);
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
