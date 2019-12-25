const initState = {
    projects: [
        {id: '1', title: 'BROO title 1', content: 'lorem ipsum dolor'},
        {id: '2', title: 'project title 2', content: 'lorem ipsum dolor'},
        {id: '3', title: 'project title 3', content: 'lorem ipsum dolor'}
    ],
    test: 'initial text'
}

const projectReducer = (state  = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error ', action.err);
            return state;
        case 'TEST_CALL':
            console.log('yeeeee it worked', action.res)
            debugger;
            return {
                ...state,
                test: action.res
            };
        case 'TEST_CALL_ERROR':
            console.log('Fuu it failed', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;