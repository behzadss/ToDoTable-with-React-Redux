import React, { Component } from 'react';
import NewTodoItemBox from './forms/NewTodoItemBox';
import TodoTableForm from './forms/TodoTableForm';



class App extends Component {
  
  render() {

    return (
      <div>
        <TodoTableForm />
        <NewTodoItemBox />

      </div>
    );
  }
}

export default App;
