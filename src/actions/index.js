import { ACTION_CONT } from '../constants/actions';
let nextId = 0;
export const addTodo = (title, priority, date) => ({
  type: ACTION_CONT.ADD_TODO,
  id: nextId++,
  title,
  priority,
  date,
});

export const toggleTodo = (id) => ({
  type: ACTION_CONT.TOGGLE_TODO,
  id,
});
export const deleteTodo = (id) => ({
  type: ACTION_CONT.DELETE_TODO,
  id,
});
export const editTodo = (id, title, priority, date) => ({
  type: ACTION_CONT.EDIT_TODO,
  id,
  title,
  priority,
  date,
});
