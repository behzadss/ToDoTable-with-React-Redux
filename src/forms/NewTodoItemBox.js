import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, arrayPush } from 'redux-form';
import isBefore from 'date-fns/isBefore';
import startOfDay from 'date-fns/startOfDay';
import TextField from '../components/form/TextField';
import DateField from '../components/form/DateField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { validateTodoTitleUnique } from '../api';

function validate(values) {
  const errors = {};

  if (!values.title || !values.title.trim()) {
    errors.title = "Title should be provided";
  }

  if (isBefore(startOfDay(values.deadline), startOfDay(new Date()))) {
    errors.deadline = "Deadline must not be in the past";
  }

  return errors;
}

async function asyncValidate(values) {
  const errors = {};

  if (values.title) {
    const titleIsUnique = await validateTodoTitleUnique(values.title);

    if (!titleIsUnique) {
      errors.title = "Title should be unique";
      throw errors;
    }
  }
}

const ConnectWrapper = connect(null, { arrayPush });

const FormWrapper = reduxForm({
  form: 'newItem',
  initialValues: { deadline: new Date() },
  validate,
  asyncValidate,
  asyncBlurFields: ['title'],
});

class NewTodoItemBox extends Component {
  handleAdd = values => {
    const { arrayPush, reset } = this.props;

    arrayPush('todoItems', 'items', values);
    reset();
  }

  handleKeyUp = event => {
    const { submit } = this.props;

    if (event.keyCode === 13) {
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
          margin: 8,
          display: 'flex',
          flexDirection: 'column',
          width: 300,
        }}
      >
        <form onSubmit={handleSubmit(this.handleAdd)}>
          <Field name="title" component={TextField} label="Title" margin="normal" />
          <Field name="deadline" component={DateField} label="Deadline" margin="normal" />
          <Button type="submit" color="primary" variant="raised" style={{ margin: 8 }}>Add</Button>
        </form>
      </Paper>
    );
  }
}

export default FormWrapper(ConnectWrapper(NewTodoItemBox));
