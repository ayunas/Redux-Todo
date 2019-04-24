const initialState = {
    todos : [],
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
                // todos : state.todos.filter( (todo,i) => (todo !== action.payload.todo) )
                todos : state.todos.filter( (todo,i) => (i !== action.payload.index) )
            }

        // case "TAG": 
        //     console.log('tag trigger value: ', action.payload.trigger);

        //     return {
        //         ...state,
        //         trigger : !action.payload.trigger
        //     }

        case "STAR": 
            console.log('the star action has arrived to the reducer. action.payload = ', action.payload);
            action.payload.important = !action.payload.important;
            return {
                ...state
            }

        default: 
            return state;
    }
}

export default rootReducer;



