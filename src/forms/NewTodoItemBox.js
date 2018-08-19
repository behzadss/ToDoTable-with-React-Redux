import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputValueChange,todoItem } from '../actions';

function mapStateToProps(state) {
    return {
      items: state.items,
      inputValue: state.inputValue,
    };
  }
  const ConnectWrapper= connect(mapStateToProps,{ inputValueChange,todoItem });

class NewTodoItemBox extends Component {
    handleAdd = ()=>{
        const {todoItem,inputValue}= this.props;
        todoItem(inputValue)
      }
      handleChange = event => {
        const {inputValueChange}=this.props;
        inputValueChange(event.target.value)
      }
      
      handleKeyUp = (event)=>{
        const {todoItem,inputValue}= this.props;
        if(event.keyCode===13){
          todoItem(inputValue)
        }
      }
    render() {
        const { items , inputValue} = this.props;
        return (
            <div style={{ 
                border: '1px solid black', 
                padding: 16,
                 display: 'flex',
                  flexDirection: 'column' ,
                  width:'300px'
                }} >
                <input
                style={{margin:8}}
                value={inputValue}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                />
                <button style={{margin:8}} onClick={this.handleAdd}>Add</button>
            </div>


        )
    }





}

export default ConnectWrapper(NewTodoItemBox);
