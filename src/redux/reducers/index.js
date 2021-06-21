import { combineReducers } from 'redux';

import toDoListReducer from './todolist.reducer'


export default combineReducers({
  toDoListReducer:toDoListReducer
});