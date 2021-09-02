import { ACTION_CONT } from '../constants/actions';

let nextId = 0;
const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CONT.ADD_TODO:
      return [
        ...state,
        {
          id: nextId++,
          title: action.title,
          date: action.date,
          priority: action.priority,
          completed: false,
        },
      ];
    case ACTION_CONT.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case ACTION_CONT.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: action.id,
              title: action.title,
              date: action.date,
              priority: action.priority,
              completed: todo.completed,
            }
          : todo
      );
    case ACTION_CONT.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
