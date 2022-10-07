import React, { useState } from "react";
import todoSlice, { deleteItem, editItem } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
const Item = ({ id, content }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem({ id: id }));
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
    if (isEdit) {
      dispatch(editItem({ id: id, content: newTask }));
    }
  };
  const [newTask, setNewTask] = useState();
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li key={id} className="mx-3 list-group-item">
      <div className="d-flex justify-content-between px-2">
        {isEdit && (
          <div className="edit_input fw-bold">
            <input
              type="text"
              placeholder="New Task.."
              onChange={(event) => {
                setNewTask(event.target.value);
              }}
            />
          </div>
        )}
        {!isEdit && <div className="content">{content}</div>}

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
