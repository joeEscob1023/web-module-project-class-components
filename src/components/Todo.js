import React from "react";

const todo = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.todo.task}</p>
    </div>
  );
};

export default todo;
