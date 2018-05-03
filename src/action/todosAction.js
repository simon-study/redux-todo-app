import { 
  ADD_TODO, DELETE_TODO, 
  TOGGLE_TODO, FETCH_TODOS,
  TOGGLE_EDIT_TODO, CANCEL_EDIT_TODO,
  EDIT_TODO 
} from '../constants/actionTypes';

export const fetchTodos = () => ({ 
  type: FETCH_TODOS 
})

export const deleteTodo = (todo) => ({
  type: DELETE_TODO, 
  todo
})

export const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo
})

export const addTodo = (text) => ({
  type: ADD_TODO, 
  text
})

export const toggleEdit = (todo) => ({
  type: TOGGLE_EDIT_TODO, 
  payload: todo
})

export const cancelEdit = (todo) => ({
  type: CANCEL_EDIT_TODO
})

export const updateTodo = (id, text) => ({  
  type: EDIT_TODO,
  id,
  text
})

export const setVisibilityFilter = filter => ({ 
  type: 'SET_VISIBILITY_FILTER',
  filter 
})
