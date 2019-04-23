import React from 'react'

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
        <button>Add</button>
      </form>
    )
  }
}

export default AddTodo;
