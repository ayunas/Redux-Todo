import React from 'react'
import {connect} from 'react-redux';


function Todos(props) {
    return (
        <ul>
            {/* {props.todos.map()} */}
            {/* <span>Todos</span> */}
        </ul>
    )
}

function mapStateToProps(state) {
    console.log("current state: ", state);
    return {}
}

export default connect(mapStateToProps,{})(Todos);
