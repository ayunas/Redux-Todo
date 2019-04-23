export function addTodo(todo) {
    console.log('addTodo action maker has been triggered ', todo);
    return {
        type: "ADD_TODO",
        payload: todo
    }
}


