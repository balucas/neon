import axios from 'axios';

export const signUp = (userInfo) => {
    return (dispatch) => {
        // return fetch("http://localhost:9000/users/create", 
        //     {
        //         method: 'POST',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(userInfo)
        //     })
        //     .then(res => res.text())
        //     .then((res) => {
        //         res = JSON.parse(res);
        //         if(res.name === 'error'){
        //             dispatch({type: 'REG_ERROR', res});
        //         }else{
        //             dispatch({type: 'REG_SUCCESS', res });
        //         }
        //     }).catch((err) => {
        //         debugger;
        //         dispatch({ type: 'REG_ERROR', err});
        //     })      

        return axios.post('http://localhost:9000/auth/register', userInfo)
            .then((res) => {
                if(!res.data){
                    debugger;
                    var err = res.message
                    dispatch({type: 'REG_ERROR', err});
                }else{
                    dispatch({type: 'REG_SUCCESS', res });
                }
            }).catch((err) => {
                debugger;
                dispatch({ type: 'REG_ERROR', err});
            })      
    }
}

export const signUpComplete = () => {
    return (dispatch) => {
        dispatch({type: 'REG_RESET'})
    }
}