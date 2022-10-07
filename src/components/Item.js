import React, { useState } from "react";
import { deleteItem } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
const Item = ({ id, content }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem({ id: id }));
  };
  const handleEdit = () => {
    dispatch(editItem({ id: id, content: content }));
  };
  return (
    <li key={id} className="mx-3 list-group-item">
      <div className="d-flex justify-content-between px-2">
        <div>{content}</div>
        <div>
          <button className="btn btn-warning" onClick={handleEdit}>
            EDIT
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
};

export default Item;
