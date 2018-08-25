import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoTable from '../components/TodoTable';
import Paper from '@material-ui/core/Paper';
import {toItemCheckChange,selectAll,SetDoneSelected,SetRemoveSelected,movedown,moveup} from '../actions'

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

const ConnectWrapper = connect(mapStateToProps, {
  toItemCheckChange,
  selectAll,
  SetDoneSelected,
  SetRemoveSelected,
  movedown,
  moveup

});

class TodoTableForm extends Component {
  handleCheckChange=(event, index)=>{
    const {toItemCheckChange}=this.props;
    toItemCheckChange(index, event.target.checked)
  }
  

  render() {
    const {
      items,
      selectAll,
      SetDoneSelected,
      SetRemoveSelected,
      movedown,
      moveup
      
    } = this.props;

    return (
      <Paper style={{width:800 , margin : 16 , padding: 8}} >
        <TodoTable
          items={items}
          onItemCheckChange={this.handleCheckChange}
          selectAll={selectAll}
          movedown={movedown}
          moveup={moveup}
          />
          <button onClick={SetDoneSelected}>Done</button>
          <button onClick={SetRemoveSelected}>Remove</button>
          </Paper>
              );
  }
}

export default ConnectWrapper(TodoTableForm);
