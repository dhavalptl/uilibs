import React, { PureComponent } from 'react';
import './DropdownList.css';
import DropdownItem from './DropdownItem';

class DropdownList extends PureComponent {
  onItemSelect = item => {
    this.props.onItemSelect(item);
  };
  render() {
    const dropdownItems = this.props.options.map(dropdownItem => (
      <DropdownItem
        key={dropdownItem.id}
        item={dropdownItem}
        onItemSelect={this.onItemSelect}
      />
    ));
    return (
      <ul className="dropdownList" style={this.props.style}>
        {dropdownItems}
      </ul>
    );
  }
}

export default DropdownList;
