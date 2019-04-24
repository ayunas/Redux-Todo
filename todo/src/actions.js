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

export function tag(todo, trigger) {
    console.log('tag has been triggered');
    return {
        type: "TAG",
        payload: {
            trigger : trigger
        }
    }
}

export function star(todo) {
    // console.log('star has been triggered');
    // console.log('todo: ', todo);

    return {
        type: "STAR",
        payload: todo
    }
}