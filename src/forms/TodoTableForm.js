import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTable from '../components/TodoTable';

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const ConnectWrapper = connect(mapStateToProps, {

});

class TodoTableForm extends Component {


  render() {
    const {
      items,
      
    } = this.props;

    return (
      <div>
        <TodoTable
          items={items}
          />
      </div>
    );
  }
}

export default ConnectWrapper(TodoTableForm);
