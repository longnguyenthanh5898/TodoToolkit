import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Lists = () => {
  const todos = useSelector((state) => state.todos);
  //   const todos = [
  //     { id: 1, content: "aaaaaaaa", isEdit: false },
  //     { id: 2, content: "bbbbbbbbbb", isEdit: false },
  //     { id: 3, content: "ccccccccccc", isEdit: true },
  //   ];
  return (
    <ul className="list-group mt-5">
      {todos.map((todo) => (
        <Item id={todo.id} content={todo.content} isEdit={todo.isEdit} />
      ))}
    </ul>
  );
};
export default Lists;
