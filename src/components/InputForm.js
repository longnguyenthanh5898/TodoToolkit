import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addList, editItem } from "../redux/todoSlice";
const InputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addList({
        content: input,
      })
    );

    setInput("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="d-flex mx-5 justify-content-between mt-5"
    >
      <input
        type="text"
        className="form-control"
        placeholder="Add todo..."
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </form>
  );
};

export default InputForm;
