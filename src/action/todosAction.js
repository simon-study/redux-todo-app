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

export function toggleTodo(todo) {
  return function (dispatch) {
    axios.put(`http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos/${todo.id}`, {completed: !todo.completed})
    .then((response) => {
      dispatch({type: 'TOGGLE_TODO_SUCCESS', payload: response.data})
    })
    .catch((err) => {
      dispatch({type: 'TOGGLE_TODO_ERROR', payload: err})
    })
  }
}

export function addTodo(text) {
  return function (dispatch) {
    axios.post(`http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos`, 
    {
      text: text,
      completed: false
    })
    .then((response) => {
      dispatch({type: 'ADD_TODO_SUCCESS', payload: response.data})
      // console.log(response.data);
    })
    .catch((err) => {
      dispatch({type: 'ADD_TODO_SUCCESS', payload: err})
    })
  }
}