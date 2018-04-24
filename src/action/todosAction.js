import axios from 'axios';

export function fetchTodos() {
  return function (dispatch) {
    axios.get(`http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos`)
    .then((response) => {
      dispatch({type: 'FETCH_TODOS_FULFILLED', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'FETCH_TODOS_REJECTED', payload: err})
    })
  }
}

export function deleteTodo(id) {
  return function (dispatch) {
    axios.delete(`http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos/${id}`)
    .then((response) => {
      dispatch({type: 'DELETE_TODO_SUCCESS', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'DELETE_TODO_REJECTED', payload: err})
    })
  }
}

export function toggleTodo(id) {
  return function (dispatch) {
    axios.put(`http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos/${id}`, completed: false)
    .then((response) => {
      dispatch({type: 'TOGGLE_TODO_SUCCESS', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'TOGGLE_TODO_ERROR', payload: err})
    })
  }
}