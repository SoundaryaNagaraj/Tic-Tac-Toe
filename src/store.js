// store.js
import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  // Add more reducers here if needed
});

const store = createStore(rootReducer);

export default store;
