import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DropdownInput from './DropdownInput';
import Dropdownlist from './DropdownList';
import './Dropdown.css';
class Dropdown extends PureComponent {
  state = {
    isOpen: false,
    selectedItem: this.props.value,
    options: this.props.options || []
  };
  toggleList = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  onItemSelect = item => {
    this.setState(prevState => ({ isOpen: false, selectedItem: item }));
    this.props.onChange(item);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (!nextProps.value) {
      return {
        selectedItem: {
          id: -1,
          label: 'Select Option'
        }
      };
    }
    if (nextProps.value.id !== prevState.selectedItem.id) {
      return {
        selectedItem: nextProps.value
      };
    }
    console.log('No Change');
    return null;
  }
  render() {
    const { isOpen, selectedItem, options } = this.state;
    const { style } = this.props;
    return (
      <div className="dropdown">
        <DropdownInput
          selectedItem={selectedItem}
          toggleList={this.toggleList}
          style={style}
          isOpen={isOpen}
        />
        {isOpen && (
          <Dropdownlist
            options={options}
            style={style}
            onItemSelect={this.onItemSelect}
          />
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {};

export default Dropdown;
