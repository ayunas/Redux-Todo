export function addTodo(todo) {
    // console.log('addTodo action maker has been triggered ', todo);
    return {
        type: "ADD_TODO",
        payload: todo
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

export function tag(todo) {
    console.log('tag has been triggered');

    return {
        type: "TAG",
        payload: {
            trigger : true
        }
    }
}