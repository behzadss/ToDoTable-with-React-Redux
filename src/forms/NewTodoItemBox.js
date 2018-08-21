import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import DatePicker from 'material-ui-pickers/DatePicker';



import {
  newTodoItemTitleChange,
  todoItem,
  newTodoItemDeadlineChange
} from '../actions';

function mapStateToProps(state) {
  return {
    title: state.newTodoItem.title,
    deadline: state.newTodoItem.deadline,
  };
}
const ConnectWrapper = connect(mapStateToProps, { newTodoItemTitleChange, todoItem, newTodoItemDeadlineChange });

class NewTodoItemBox extends Component {
  handleAdd = () => {
    const { todoItem, title, deadline } = this.props;
    todoItem({ title, deadline })
  }
  handleChange = event => {
    const { newTodoItemTitleChange } = this.props;
    newTodoItemTitleChange(event.target.value)
  }
  handledateChange = date => {
    const { newTodoItemDeadlineChange } = this.props;
    newTodoItemDeadlineChange(date)
  }

  handleKeyUp = event => {
    const { todoItem, title, deadline } = this.props;

    if (event.keyCode === 13) {
      todoItem({ title, deadline });
    }
  }
  render() {
    const { title, deadline } = this.props;
    return (
      <Paper
      style={{ width: 300}}>
        <TextField
        label="Title"
        value={title}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
        margin="normal"
           /><br/>
        <DatePicker
          label="Deadline"
          value={deadline}
          format="DD/MM/YY"
          onChange={this.handledateChange}
          margin="normal"
        /><br/>
        <Button style={{ margin: 8}} variant="contained" color="primary" onClick={this.handleAdd}>Add</Button>
      </Paper>


    )
  }
}

export default ConnectWrapper(NewTodoItemBox);
