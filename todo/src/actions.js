export function addTodo(todo) {
    // console.log('addTodo action maker has been triggered ', todo);
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export function deleteTodo(todo) {
    console.log("deleteTodo action creator has been triggered ", todo);
    return {
        type: "DELETE_TODO",
        payload: todo
    }
}


