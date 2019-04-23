import React from 'react'
import {addTodo} from '../actions';
import {connect} from 'react-redux';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo : ""
        }
    }

    input = e => {
        this.setState({
            todo : e.target.value
        })
    }

  render() {
    return (
      <form>
        <input name="add" placeholder="Add Todo..." value={this.state.todo} onChange={this.input}/>
        <button onClick={ (e) => {e.preventDefault(); return this.props.addTodo(this.state.todo)} }>Add</button>
      </form>
    )
  }
}

export default connect(null,{addTodo : addTodo})(AddTodo);
