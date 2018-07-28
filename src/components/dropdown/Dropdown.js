import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownInput from './DropdownInput';
import Dropdownlist from './DropdownList';

class Dropdown extends PureComponent {
  state = {
    isOpen: false,
    selectedOption: this.props.value,
    options: this.props.options || []
  };
  onToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  onOptionSelect = option => {
    this.setState(prevState => ({ isOpen: false, selectedOption: option }));
    this.props.onChange(option);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.value) {
      return {
        selectedOption: {
          id: -1,
          label: 'Select Option',
          value: ''
        }
      };
    }
    if (nextProps.value.id !== prevState.selectedOption.id) {
      return {
        selectedOption: nextProps.value
      };
    }
    return null;
  }
  render() {
    const { isOpen, selectedOption, options } = this.state;
    const { style } = this.props;
    return (
      <div className="dropdown">
        <DropdownInput
          selectedOption={selectedOption}
          onToggle={this.onToggle}
          style={style}
          isOpen={isOpen}
        />
        {isOpen && (
          <Dropdownlist
            options={options}
            style={style}
            onOptionSelect={this.onOptionSelect}
          />
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  value: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default Dropdown;
