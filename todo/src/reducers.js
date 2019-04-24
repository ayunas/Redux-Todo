const initialState = {
    todos : []
}


function rootReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_TODO": 
            console.log("In ADD_TODO action of reducer ");
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }

        case "DELETE_TODO":
            console.log("DELETE_TODO FILTER: ", action.payload);
            return {
                ...state,
                todos : state.todos.filter( todo => todo !== action.payload )
            }
            
        default: 
            return state;
    }


}

export default rootReducer;



