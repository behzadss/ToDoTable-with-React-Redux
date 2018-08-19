import React, { Component } from 'react';
import {connect} from 'react-redux';
import { inputValueChange,todoItem } from './actions';

function mapStateToProps(state) {
  return {
    items: state.items,
    inputValue: state.inputValue,
  };
}

const ConnectWrapper= connect(mapStateToProps,{ inputValueChange,todoItem });
class App extends Component {
  handleChange = event => {
    const {inputValueChange}=this.props;
    inputValueChange(event.target.value)
  }
  handleAdd = ()=>{
    const {todoItem,inputValue}= this.props;
    todoItem(inputValue)
  }
  handleKeyup = (event)=>{
    const {todoItem,inputValue}= this.props;
    if(event.keyCode===13){
      todoItem(inputValue)
    }
  }
  render() {
    const { items, inputValue } = this.props;

    return (
      <div>
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ol>
        <input value={inputValue} onKeyUp={this.handleKeyup} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default ConnectWrapper(App);
