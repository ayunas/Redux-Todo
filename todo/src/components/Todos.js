import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';

function Todos(props) {
    // console.log('todos props: ', props.todos);
    return (
        <ul>
            {props.todos.map( (todo, i) => 
            <div>
                <li key={i}>{todo}</li>
                <button id={i} onClick={ () => props.deleteTodo(todo)}>delete</button>
            </div>
            )}
            
        </ul>
    )
}

function mapStateToProps(state) {
    // console.log("current state: ", state);
    return {
        todos : state.todos
    }
}

// function mapDispatchToProps() {
//     return {
//         deleteTodo : () => deleteTodo()
//     }
// }

export default connect(mapStateToProps, {deleteTodo : deleteTodo})(Todos);
