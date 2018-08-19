import React, { Component } from 'react';
import {connect} from 'react-redux';
function mapStateToProps(state) {
  return {
    items: state.items,
    inputValue: state.inputValue,
  };
}

const ConnectWrapper= connect(mapStateToProps);
class App extends Component {
  render() {
    const { items, inputValue } = this.props;

    return (
      <div>
        <ol>
          {items.map((item, index) => (
            <li key={index}></li>
          ))}
        </ol>
        <input value={inputValue}  />
        <button >Add</button>
      </div>
    );
  }
}

export default ConnectWrapper(App);
