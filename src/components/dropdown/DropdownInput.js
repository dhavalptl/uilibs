import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class DropdownInput extends Component {
  render() {
    const { selectedOption, style, toggleList, isOpen } = this.props;
    return (
      <div style={style} className="dropdownInput">
        <div className="dropdownTitle" onClick={() => toggleList()}>
          {selectedOption.label}
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

DropdownInput.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleList: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  selectedOption: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default DropdownInput;
