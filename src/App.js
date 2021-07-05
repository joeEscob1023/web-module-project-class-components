import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { v4 as uuid } from "uuid";

import "../src/Todo.css";

const todoList = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoList,
    };
  }

  toggleTask = (id) => {
    this.setState({
      ...this.state.todos,
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  addTask = (task) => {
    const newTask = {
      task: task,
      id: uuid(),
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask],
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleTask={this.toggleTask} todos={this.state.todos} />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
