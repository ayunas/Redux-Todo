import React from 'react'
import {connect} from 'react-redux';


function Todos(props) {
    console.log('todos props: ', props.todos);
    return (
        <ul>
            {props.todos.map( todo => <li>{todo}</li>)}
        </ul>
    )
}

function mapStateToProps(state) {
    console.log("current state: ", state);
    return {
        todos : state.todos
    }
}

export default connect(mapStateToProps,null)(Todos);
