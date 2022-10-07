import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, content: "aaaaaaaa" },
    { id: 2, content: "bbbbbbbbbb" },
    { id: 3, content: "ccccccccccc" },
    { id: 4, content: "zzzzzzzzzzzzzzzz" },
  ],
  reducers: {
    addList: (state, action) => {
      const newItem = {
        id: Date.now(),
        content: action.payload.content,
        // isEdit: false,
      };
      state.push(newItem);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editItem: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload.id) {
          item.content = action.payload.content;
        }
      });
    },
  },
});
export const { addList, deleteItem, editItem } = todoSlice.actions;

export default todoSlice.reducer;
