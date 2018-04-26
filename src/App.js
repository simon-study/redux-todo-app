import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import TodoEdit from './components/TodoEdit';
import VisibleTodoList from './container/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoEdit /> 
        <VisibleTodoList />
        <TodoFilter />
      </div>
    );
  }
}

export default App;
