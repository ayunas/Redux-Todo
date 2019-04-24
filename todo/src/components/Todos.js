import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo, tag} from '../actions';

class Todos extends React.Component {
    // console.log('todos props: ', props.todos);
    constructor(props) {
        super(props);

        this.state = {
            trigger : false
        }
    }

    render() {
        return (
            <ul>
                {this.props.todos.map( (todo, i) => 
                <div className='todo'>
                    <li key={i} onClick={ () => {this.setState({trigger : !this.state.trigger}); this.props.tag(todo, this.state.trigger)} }>{todo}</li>
                    <button id={i} onClick={ () => this.props.deleteTodo(todo,i)}>delete</button>
                </div>
                )}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log("current state: ", state);
    console.log(("triggers ", state.trigger))
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
