import React, { Component } from 'react';
import '../App.css';

class TodoList extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  removeTodo = (todo) => {
    this.props.removeTodo(todo);
  }

  toggleTodo = (todo) => {
    this.props.toggleTodo(todo);
  }

  toggleEdit = (todo) => {
    this.props.toggleEdit(todo)
  }

  render() {
    const { todos, fetched, error } = this.props; 
    
    if (!fetched) {
      return <div>Loading...</div>
    } else if (error) {
      return <div>Error: {error.message}</div>
    }

    return(
      !this.props.isEditing &&
      <div>        
        <ul>
          {
            todos.map(todo => {            
              return (
                <li key={todo.id}>
                  <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}} 
                    onClick={() => this.toggleTodo(todo)}>{todo.text}</span>                
                  <button onClick={() => this.toggleEdit(todo)}>Edit</button>
                  <button onClick={() => this.removeTodo(todo)}>Remove</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
