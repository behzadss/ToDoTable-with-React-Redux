import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTable from '../components/TodoTable';
import {toItemCheckChange,selectAll} from '../actions'

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const ConnectWrapper = connect(mapStateToProps, {
  toItemCheckChange,
  selectAll

});

class TodoTableForm extends Component {
  handleCheckChange=(event, index)=>{
    const {toItemCheckChange}=this.props;
    toItemCheckChange(index, event.target.checked)
  }
  

  render() {
    const {
      items,
      selectAll
      
    } = this.props;

    return (
      <div>
        <TodoTable
          items={items}
          onItemCheckChange={this.handleCheckChange}
          selectAll={selectAll}
          />
      </div>
    );
  }
}

export default ConnectWrapper(TodoTableForm);
