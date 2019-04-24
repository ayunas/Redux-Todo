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
            console.log('star action dispatched to reducer. action.payload = ', action.payload);
            // action.payload.important = !action.payload.important;
            return {
                ...state,
                todos : state.todos.map( (todo,i) => {
                    if (action.payload.index === i) {
                        return {...todo, important: !todo.important}
                    } else {
                        return todo
                    }
                })

                // todos : state.todos.map( (todo) => {
                //     if (action.payload.todo === todo) {
                //         return {
                //             ...todo,
                //             important : !action.payload.important
                //         }
                //     }
                // } )
            }

        default: 
            return state;
    }
}

export default rootReducer;



