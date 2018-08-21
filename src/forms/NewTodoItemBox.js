import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {reduxForm, Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import DatePicker from 'material-ui-pickers/DatePicker';



import {
  todoItem,
  newTodoItemDeadlineChange
} from '../actions';

function mapStateToProps(state) {
  return {
    title: state.newTodoItem.title,
    deadline: state.newTodoItem.deadline,
  };
}
const ConnectWrapper = connect(mapStateToProps, { todoItem, newTodoItemDeadlineChange });
const FormWrapper = reduxForm()

class NewTodoItemBox extends Component {
  handleAdd = () => {
    const { todoItem, title, deadline } = this.props;
    todoItem({ title, deadline })
  }
  
  handledateChange = date => {
    const { newTodoItemDeadlineChange } = this.props;
    newTodoItemDeadlineChange(date)
  }

  render() {
    const { title, deadline } = this.props;
    return (
      <Paper
      style={{ width: 300}}>
        <Field
        name="title"
        component={TextField}
        label='Title'
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

export default ConnectWrapper((FormWrapper(NewTodoItemBox)));
