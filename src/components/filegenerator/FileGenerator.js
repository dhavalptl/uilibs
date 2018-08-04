import React, { Component } from 'react';
import XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class FileGenerator extends Component {
  generateXLSXFile = () => {
    const ws = XLSX.utils.json_to_sheet(this.props.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, this.props.fileName);
    XLSX.writeFile(
      wb,
      `${this.props.fileName || 'Data'}.${this.props.format || 'xlsx'}`
    );
  };
  getFormattedHeaders = firstDataObject => {
    return Object.keys(firstDataObject).map(key => key.toUpperCase());
  };
  render() {
    return (
      <button
        type="button"
        onClick={this.generateXLSXFile}
        style={
          this.props.style || {
            height: 30,
            width: 100,
            fontSize: '.8em',
            backgroundColor: 'white',
            border: '1px solid lightgrey',
            cursor: 'pointer',
            textAlign: 'center'
          }
        }
      >
        <span style={{ paddingRight: 5 }}>
          <FontAwesomeIcon icon="file-excel" size={'lg'} />
        </span>
        {this.props.buttonLabel || 'Export'}
      </button>
    );
  }
}

export default FileGenerator;
