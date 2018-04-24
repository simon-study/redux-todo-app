const initialState = {
  fetching: false,
  fetched: false,
  todos: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_PENDING':
      return {
        ...state, 
        fetching: true
      }
      break;
    case 'FETCH_TODOS_REJECTED':
      return {
        ...state, 
        fetching: false,
        error: action.payload.error
      }
      break;
    case 'FETCH_TODOS_FULFILLED':
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        todos: action.payload
      }
      break;
    case 'DELETE_TODO_SUCCESS': 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    case 'TOGGLE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed
          }
          return todo;
        })
      }
  }
  return state;
}

export default reducer;