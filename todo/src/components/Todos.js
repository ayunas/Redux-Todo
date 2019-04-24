import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo, tag} from '../actions';

function Todos(props) {
    // console.log('todos props: ', props.todos);
    return (
        <ul>
            {props.todos.map( (todo, i) => 
            <div className='todo'>
                <li key={i} onClick={ () => props.tag(todo) }>{todo}</li>
                <button id={i} onClick={ () => props.deleteTodo(todo,i)}>delete</button>
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

function mapDispatchToProps() {
    return {
        deleteTodo : deleteTodo,
        tag : tag
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Todos);
