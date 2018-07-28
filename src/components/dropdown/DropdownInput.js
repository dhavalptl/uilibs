import React, { Component } from 'react';
import './DropdownInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DropdownInput extends Component {
  render() {
    const { selectedItem, style, toggleList, isOpen } = this.props;
    return (
      <div style={style} className="dropdownInput">
        <div className="dropdownTitle" onClick={() => toggleList()}>
          {selectedItem.label}
        </div>
        <div className="dropdownToggle" onClick={() => toggleList()}>
          {isOpen ? (
            <FontAwesomeIcon icon="angle-up" />
          ) : (
            <FontAwesomeIcon icon="angle-down" />
          )}
        </div>
      </div>
    );
  }
}

export default DropdownInput;
