import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Lists = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group mt-5">
      {todos.map((todo) => (
        <Item id={todo.id} content={todo.content} isEdit={todo.isEdit} />
      ))}
    </ul>
  );
};
export default Lists;
