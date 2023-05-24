import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Todo = {
  id: string;
  title: string;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
};


interface IPayloadAdd {
  title: string;
  id: string;
}

interface IPayloadId {
  id: string;
}

interface IPayloadEdit {
  id: string;
  title: string;
}



const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IPayloadAdd>) {
      state.list.push({
        id: action.payload.id,
        title: action.payload.title,
      });
    },
    removeTodo(state, action: PayloadAction<IPayloadId>) {
      state.list = state.list.filter(todo => todo.id !== action.payload.id);
    },
    editTodo(state, action: PayloadAction<IPayloadEdit>) {
      const targetTodo = state.list.find(todo => todo.id === action.payload.id);
      if (targetTodo) {
        targetTodo.title = action.payload.title;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
