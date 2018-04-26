import React from 'react';
import { addTodo } from '../action/todosAction';

const TodoForm = ({ isEditing, dispatch }) => {
  let input

  return (
    !isEditing &&
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm;
