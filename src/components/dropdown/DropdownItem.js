import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ option, onOptionSelect }) => {
  return (
    <li
      className="listItem"
      onClick={() => {
        onOptionSelect(option);
      }}
    >
      {option.label}
    </li>
  );
};

DropdownItem.propTypes = {
  onOptionSelect: PropTypes.func.isRequired,
  option: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default DropdownItem;
