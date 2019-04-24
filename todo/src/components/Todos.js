import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo, star} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarClear} from '@fortawesome/free-regular-svg-icons';

class Todos extends React.Component {
    // console.log('todos props: ', props.todos);
    constructor(props) {
        super(props);

        this.state = {
            trigger : false,
            star : false
        }
    }

    // star = () => {
    //     console.log('star triggered');
    //     this.setState({
    //         star : !this.state.star
    //     })
       
    // }

    render() {
        console.log(this.props.todos, "todos on props of <Todos>");
        
        return (
            <ul>
                {this.props.todos.map( (todo, i) => 
                <div className='todo'>
                   {todo.important ? <FontAwesomeIcon icon={faStar} onClick={ () => this.props.star(todo)}/>
                   : <FontAwesomeIcon icon={faStarClear} onClick={ () => this.props.star(todo,i)}/>}
                    <li>{todo.todo}</li>
                    <button id={i} onClick={ () => this.props.deleteTodo(todo.todo,i)}>delete</button>
                </div>
                )}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    console.log("current state: ", state);
    return {
        todos : state.todos
    }
}

function mapDispatchToProps() {
    return {
        deleteTodo : deleteTodo,
        // tag : tag,
        star : star
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Todos);
