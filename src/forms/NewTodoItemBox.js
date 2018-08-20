import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newTodoItemTitleChange,
        todoItem,
        newTodoItemDeadlineChange } from '../actions';

function mapStateToProps(state) {
    return {
      title: state.newTodoItem.title,
      deadline: state.newTodoItem.deadline,
    };
  }
  const ConnectWrapper= connect(mapStateToProps,{ newTodoItemTitleChange,todoItem ,newTodoItemDeadlineChange});

class NewTodoItemBox extends Component {
    handleAdd = ()=>{
        const {todoItem,title , deadline}= this.props;
        todoItem({title,deadline})
      }
      handleChange = event => {
        const {newTodoItemTitleChange}=this.props;
        newTodoItemTitleChange(event.target.value)
      }
      handledateChange = event => {
        const {newTodoItemDeadlineChange}=this.props;
        newTodoItemDeadlineChange(event.target.value)
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
            <div style={{ 
                border: '1px solid black', 
                padding: 16,
                 display: 'flex',
                  flexDirection: 'column' ,
                  width:'300px'
                }} >
                <label>Title:</label>
                <input
                style={{margin:8}}
                value={title}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                />
                <label>Deadline:</label>
                <input
                style={{margin:8}}
                value={deadline}
                onKeyUp={this.handleKeyUp}
                onChange={this.handledateChange}
                />
                <button style={{margin:8}} onClick={this.handleAdd}>Add</button>
            </div>


        )
      }
}

export default ConnectWrapper(NewTodoItemBox);
