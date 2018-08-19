import React, { Component } from 'react';
import {connect} from 'react-redux';
import { inputValueChange,todoItem } from './actions';
import TodoTable from './components/TodoTable';
import NewTodoItemBox from './forms/NewTodoItemBox';
import TodoTableForm from './forms/TodoTableForm';



class App extends Component {
  
  render() {
    const { items, inputValue } = this.props;

    return (
      <div>
        <TodoTableForm />
        <NewTodoItemBox />

      </div>
    );
  }
}

export default App;
