import React, { Component } from 'react';
import {connect} from 'react-redux';
import { inputValueChange } from './actions';

function mapStateToProps(state) {
  return {
    items: state.items,
    inputValue: state.inputValue,
  };
}

const ConnectWrapper= connect(mapStateToProps,{ inputValueChange });
class App extends Component {
  handleChange = event => {
    const {inputValueChange}=this.props;
    inputValueChange(event.target.value)
  }
  render() {
    const { items, inputValue } = this.props;

    return (
      <div>
        <ol>
          {items.map((item, index) => (
            <li key={index}></li>
          ))}
        </ol>
        <input value={inputValue} onChange={this.handleChange} />
        <button >Add</button>
      </div>
    );
  }
}

export default ConnectWrapper(App);
