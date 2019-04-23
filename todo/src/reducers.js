const initialState = {
    todos : []
}


function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_TODO": 
            console.log("state in ADD_TODO action of redux ", state);
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }
            
        default: 
            return state;
    }


}

export default rootReducer;



