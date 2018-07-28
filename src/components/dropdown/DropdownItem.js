import React from 'react';
import './DropdownItem.css';
const DropdownItem = ({ item, onItemSelect }) => {
  return (
    <li
      className="listItem"
      onClick={() => {
        onItemSelect(item);
      }}
    >
      {item.label}
    </li>
  );
};

export default DropdownItem;
