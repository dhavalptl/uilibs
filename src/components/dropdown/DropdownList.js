import React, { PureComponent } from 'react';
import DropdownItem from './DropdownItem';
import PropTypes from 'prop-types';

class DropdownList extends PureComponent {
  onOptionSelect = option => {
    this.props.onOptionSelect(option);
  };
  render() {
    const options = this.props.options.map(option => (
      <DropdownItem
        key={option.id}
        option={option}
        onOptionSelect={this.onOptionSelect}
      />
    ));
    return (
      <ul className="dropdownList" style={this.props.style}>
        {options}
      </ul>
    );
  }
}

DropdownList.propTypes = {
  options: PropTypes.array.isRequired,
  onOptionSelect: PropTypes.func.isRequired,
  style: PropTypes.shape({})
};

export default DropdownList;
