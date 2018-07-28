import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class DropdownInput extends Component {
  render() {
    const { selectedOption, style, onToggle, isOpen } = this.props;
    return (
      <div style={style} className="dropdownInput">
        <div className="dropdownTitle" onClick={() => onToggle()}>
          {selectedOption.label}
        </div>
        <div className="dropdownToggle" onClick={() => onToggle()}>
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
  onToggle: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  selectedOption: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default DropdownInput;
