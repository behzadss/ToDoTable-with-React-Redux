import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray, getFormValues } from 'redux-form';
import TodoTable from '../components/TodoTable';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function mapStateToProps(state) {
  const values = getFormValues('todoItems')(state);
  return {
    items: values ? (values.items || []) : [],
  };
}

const ConnectWrapper = connect(mapStateToProps, {

});
const FormWrapper = reduxForm({ form: 'todoItems' })

class TodoTableForm extends Component {
  SetDoneSelected = () => {
    const { items, change } = this.props;
    items.forEach((item, index) => {
      if (item.checked) {
        change(`items[${index}].checked`, false);
        change(`items[${index}].done`, true);
      }
    });
  }
  SetRemoveSelected = () => {
    const { items, array } = this.props;
    const selectedIndices = [];
    items.forEach((item, index) => {
      if (item.checked) {
        selectedIndices.push(index);
      }
    });
    selectedIndices.reverse();
    for (const index of selectedIndices) {
      array.remove('items', index);
    }
  }


  render() {
    const { change, array, submitting } = this.props;

    return (
      <Paper style={{ width: 1000, margin: 16, padding: 8 }}>
        <FieldArray
          name="items"
          rerenderOnEveryChange={true}
          component={TodoTable}
          change={change}
          array={array}
          disabled={submitting}

        />
        <Button
          style={{ margin: 16 }}
          variant="raised"
          color="primary"
          onClick={this.SetDoneSelected}
          disabled={submitting}

        >Done
          </Button>
        <Button style={{ margin: 16 }}
          variant="raised"
          color="primary"
          onClick={this.SetRemoveSelected}
          disabled={submitting}
        >Remove</Button>
      </Paper>
    );
  }
}

export default ConnectWrapper(FormWrapper(TodoTableForm));
