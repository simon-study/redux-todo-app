import {
  ADD_TODO_SUCCESS, ADD_TODO_FAILURE,
  FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE,
  TOGGLE_TODO_SUCCESS, TOGGLE_TODO_FAILURE,
  DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE,
  TOGGLE_EDIT_TODO, CANCEL_EDIT_TODO,
  EDIT_TODO_SUCCESS, EDIT_TODO_FAILURE
} from '../constants/actionTypes';
import { initialState } from './initialState';

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        fetched: true, 
        todos: action.payload.data
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        error: action.error,
        fetched: true
      }
    case DELETE_TODO_SUCCESS: 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.data.id)
      }
    case DELETE_TODO_FAILURE:
    // console.log(action.error);
      return {
        ...state,
        error: action.error
      }
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.data.id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      }
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.concat(action.payload.data)  
      }
    case ADD_TODO_FAILURE:
      break;
    case TOGGLE_EDIT_TODO: 
      return {
        ...state,
        itemEdit: action.payload,
        isAdding: false,
        isEditing: true
      }
    case CANCEL_EDIT_TODO:
      return {
        ...state,
        itemEdit: {},
        isAdding: true,
        isEditing: false,
      }
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        isAdding: true,
        isEditing: false,
        itemEdit: {},
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.data.id) {
            todo.text = action.payload.data.text
          }
          return todo;
        })
      }
    case EDIT_TODO_FAILURE:
      break;
    default:
      return state;
  }
}

export default todos;