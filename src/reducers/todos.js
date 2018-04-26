const initialState = {
  fetched: false,
  isEditing: false,
  isAdding: true,
  todos: [],
  itemEdit: {},
  error: null
}

const FETCH_TODOS_PENDING = 'FETCH_TODOS_PENDING';
const FETCH_TODOS_REJECTED = 'FETCH_TODOS_REJECTED';
const FETCH_TODOS_FULFILLED = 'FETCH_TODOS_FULFILLED';
const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_PENDING:
      return {
        ...state, 
        fetched: false
      }
    case FETCH_TODOS_REJECTED:
      return {
        ...state, 
        fetched: false,
        error: action.payload.error
      }
    case FETCH_TODOS_FULFILLED:
      return {
        ...state, 
        fetched: true, 
        todos: action.payload
      }
    case DELETE_TODO_SUCCESS: 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.concat(action.payload)  
      }
    case 'TOGGLE_EDIT_TODO': 
      return {
        ...state,
        itemEdit: action.payload,
        isAdding: false,
        isEditing: true
      }
    case 'CANCEL_EDIT_TODO':
      return {
        ...state,
        itemEdit: {},
        isAdding: true,
        isEditing: false,
      }
    case 'SUBMIT_EDIT_SUCCESS':
      return {
        ...state,
        isAdding: true,
        isEditing: false,
        itemEdit: {},
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text
          }
          return todo;
        })
      }
    default:
      return state;
  }
}

export default todos;