// reducers/todosReducer.js
import { ADD_TODO } from '../actions';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.text],
      };
    default:
      return state;
  }
};

export default todosReducer;
