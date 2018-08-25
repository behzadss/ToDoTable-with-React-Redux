import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '../components/form/TextField';
import DateField from '../components/form/DateField';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import DatePicker from 'material-ui-pickers/DatePicker';



import {
  todoItem,
} from '../actions';


const ConnectWrapper = connect(null, { todoItem });
const FormWrapper = reduxForm({ form: 'newItem', initialValues: { deadline: new Date() } })

class NewTodoItemBox extends Component {
  handleAdd = values => {
    const { todoItem ,reset} = this.props;
    todoItem(values);
    reset();
  }

  handleKeyUp=event => {
    const {submit}= this.props;
    if(event.KeyCode===13){
      submit();
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Paper
        square={true}
        style={{
          padding: 16,
          width: 300,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <form onSubmit={handleSubmit(this.handleAdd)}>
          <Field name="title" component={TextField} label='Title' margin="normal" />
          <Field name="deadline" component={DateField} label='Deadline' margin="normal" />
          <Button type="submit" style={{ margin: 8 }} variant="raised" color="primary" onClick={this.handleSubmit}>Add</Button>
        </form>
      </Paper>


    )
  }
}

export default ConnectWrapper((FormWrapper(NewTodoItemBox)));
