// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearTask();
  };
  console.log(props);
  return (
    <div>
      {props.todos.map((todo) => {
        return <Todo toggleTask={props.toggleTask} key={todo.id} todo={todo} />;
      })}
      <button onClick={handleClick}>Clear Task(s)</button>
    </div>
  );
};

export default TodoList;
