import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo, tag} from '../actions';
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

    star = () => {
        console.log('star has been triggered');
        this.setState({
            star : !this.state.star
        })
    }

    render() {
        return (
            <ul>
                {this.props.todos.map( (todo, i) => 
                <div className='todo'>
                    { this.state.star === true ? <FontAwesomeIcon onClick={this.star} icon={faStar} /> : <FontAwesomeIcon onClick={this.star} icon={faStarClear} /> }
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
