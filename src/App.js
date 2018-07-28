import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/dropdown/Dropdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
const style = {
  width: '200px'
};
library.add(faAngleDown, faAngleUp);
const list = [
  {
    id: 1,
    label: 'Indian Ruppes',
    value: 'INR'
  },
  {
    id: 2,
    label: 'Canadian Dollar',
    value: 'CAD'
  },
  {
    id: 3,
    label: 'US Dollar',
    value: 'USD'
  }
];
class App extends Component {
  state = {
    selectedOption: {
      id: 3,
      label: 'US Dollar',
      value: 'USD'
    }
  };
  onChange = selectedItems => {
    this.setState({
      selectedOption: selectedItems
    });
  };
  onReset = () => {
    this.setState({
      selectedOption: null
    });
  };
  render() {
    return (
      <div className="App">
        <Dropdown
          style={style}
          options={list}
          onChange={this.onChange}
          value={this.state.selectedOption}
        />
        <div>
          <button type="button" onClick={this.onReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
