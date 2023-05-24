import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
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
        isDone: false,
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
    toggleDone(state, action: PayloadAction<IPayloadId>) {
      const targetTodo = state.list.find(todo => todo.id === action.payload.id);
      if (targetTodo) {
        targetTodo.isDone = !targetTodo.isDone;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleDone } = todoSlice.actions;
export default todoSlice.reducer;
