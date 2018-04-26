import React, { Component } from 'react';
import AddForm from './container/AddForm';
import Footer from './container/Footer';
import EditForm from './container/EditForm';
import VisibleTodoList from './container/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddForm />
        <EditForm /> 
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
