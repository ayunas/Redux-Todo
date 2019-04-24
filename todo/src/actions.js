
export function addTodo(todo,important) {
    // console.log('addTodo action maker has been triggered ', todo);
    return {
        type: "ADD_TODO",
        payload: {
            todo : todo,
            important : important
        }
    }
}

export function deleteTodo(todo,i) {
    console.log("deleteTodo action creator has been triggered ", todo, i);
    return {
        type: "DELETE_TODO",
        payload: {
            todo : todo,
            index : i
        }
    }   
}

export function star(todo,i) {
    console.log('star has been triggered in the star action creator');
    // console.log('todo: ', todo);

    return {
        type: "STAR",
        payload: {
            todo : todo,
            index : i
        }
    }
}

// export function tag(todo, trigger) {
//     console.log('tag has been triggered');
//     return {
//         type: "TAG",
//         payload: {
//             trigger : trigger
//         }
//     }
// }

