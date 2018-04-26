import axios from 'axios';

const API_PATH = 'http://5adec2ccbf932f0014d11ad1.mockapi.io/api/v1/todos/';

export function fetchTodos() {
  return function (dispatch) {
    axios.get(API_PATH)
      .then((res) => {
        dispatch({type: 'FETCH_TODOS_FULFILLED', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_TODOS_REJECTED', payload: err})
      })
  }
}

export function deleteTodo(id) {
  return function (dispatch) {
    axios.delete(API_PATH + `${id}`)
      .then((res) => {
        dispatch({type: 'DELETE_TODO_SUCCESS', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'DELETE_TODO_REJECTED', payload: err})
      })
  }
}

export function toggleTodo(todo) {
  return function (dispatch) {
    axios.put(API_PATH + `${todo.id}`, {completed: !todo.completed})
      .then((res) => {
        dispatch({type: 'TOGGLE_TODO_SUCCESS', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'TOGGLE_TODO_ERROR', payload: err})
      })
  }
}

export function addTodo(text) {
  return function (dispatch) {
    axios.post(API_PATH, { text: text, completed: false })
      .then((res) => {
        dispatch({type: 'ADD_TODO_SUCCESS', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'ADD_TODO_ERROR', payload: err})
      })
  }
}

export const toggleEdit = (todo) => ({ type: 'TOGGLE_EDIT_TODO', payload: todo })

export const cancelEdit = (todo) => ({ type: 'CANCEL_EDIT_TODO' })

export function updateTodo(id, text) {
  return function (dispatch) {
    console.log(id, text);
    axios.put(API_PATH + `${id}`, {text: text})
      .then((res) => {
        dispatch({type: 'SUBMIT_EDIT_SUCCESS', payload: res.data})
      })
      .catch((err) => {
        dispatch({type: 'SUBMIT_EDIT_ERROR', payload: err})
      })
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
