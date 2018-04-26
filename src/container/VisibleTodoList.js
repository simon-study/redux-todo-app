import { connect } from 'react-redux'
import TodoList from '../components/TodoList';
import { fetchTodos } from '../action/todosAction';
import { deleteTodo } from '../action/todosAction';
import { toggleTodo } from '../action/todosAction';
import { toggleEdit } from '../action/todosAction';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_INACTIVE':
      return todos.filter(t => t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter),
  fetched: state.todos.fetched,
  error: state.todos.error,
  isEditing: state.todos.isEditing,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchTodos());
    },
    removeTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    toggleTodo: (todo) => {
      dispatch(toggleTodo(todo))
    },
    toggleEdit: (todo) => {
      dispatch(toggleEdit(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);