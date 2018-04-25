import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../action/todosAction';
import { deleteTodo } from '../action/todosAction';
import { toggleTodo } from '../action/todosAction';

class TodoList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  removeTodo = (id) => {
    this.props.removeTodo(id);
  }

  toggleTodo = (todo) => {
    this.props.toggleTodo(todo);
  }

  render() {
    const { todos, fetched, error } = this.props;
    
    if (!fetched) {
      return <div>Loading...</div>
    } else if (error) {
      return <div>Error: {error.message}</div>
    }

    return(      
      <ul>
        {
          todos.map(todo => {            
            return (
              <li key={todo.id}>
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} 
                  onClick={() => this.toggleTodo(todo)}>{todo.text}</span>
                <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  fetched: state.fetched
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
