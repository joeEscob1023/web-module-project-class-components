import React from "react";

class TodoFrom extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.props);
    e.preventDefault();
    this.props.addTask(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="task" />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoFrom;
