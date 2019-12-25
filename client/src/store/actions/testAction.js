export function testAction(){
    return dispatch => {
        // async call to db here
        
        return fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then((res) => {
            dispatch({ type: 'TEST_CALL', res });
        }).catch((err) => {
            dispatch({ type: 'TEST_CALL_ERROR', err });
        });
    }
};