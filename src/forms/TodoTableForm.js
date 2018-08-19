import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTable from '../components/TodoTable';
import {toItemCheckChange} from '../actions'

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const ConnectWrapper = connect(mapStateToProps, {
  toItemCheckChange

});

class TodoTableForm extends Component {
  handleCheckChange=(event, index)=>{
    const {toItemCheckChange}=this.props;
    toItemCheckChange(index, event.target.checked)
  }

  render() {
    const {
      items,
      
    } = this.props;

    return (
      <div>
        <TodoTable
          items={items}
          onItemCheckChange={this.handleCheckChange}
          />
      </div>
    );
  }
}

export default ConnectWrapper(TodoTableForm);
