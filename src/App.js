import React, { Component } from 'react';
import NewTodoItemBox from './forms/NewTodoItemBox';
import TodoTableForm from './forms/TodoTableForm';
import CssBaseline from '@material-ui/core/CssBaseline';




class App extends Component {
  
  render() {

    return (
      <div>
        <CssBaseline>
        <TodoTableForm />
        <NewTodoItemBox />
        </CssBaseline>
      </div>
    );
  }
}

export default App;
