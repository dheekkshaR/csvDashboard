// src/components/SearchData.js
import React, { useState, useEffect } from 'react';

const SearchData = ({ csvData }) => {
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [availableColumns, setAvailableColumns] = useState([]);
  const [uniqueValues, setUniqueValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Extract column headers from CSV data
    const columns = csvData ? csvData.split('\n')[0].split(',') : [];
    setAvailableColumns(columns);
  }, [csvData]);

  useEffect(() => {
    // Fetch unique values for the selected column
    const fetchUniqueValues = () => {
      const columnIndex = availableColumns.indexOf(selectedColumn);
      if (columnIndex !== -1) {
        const values = csvData
          .split('\n')
          .slice(1)
          .map((row) => row.split(',')[columnIndex])
          .filter((value, index, self) => self.indexOf(value) === index);
        setUniqueValues(values);
      }
    };

    if (selectedColumn) {
      fetchUniqueValues();
    }
  }, [csvData, selectedColumn, availableColumns]);

  const handleColumnChange = (e) => {
    const selectedColumn = e.target.value;
    setSelectedColumn(selectedColumn);
    setSelectedValue('');
    setUniqueValues([]);
    setFilteredData([]);
  };

  const handleValueChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSearch = () => {
    // Filter data based on selected column and value
    const columnIndex = availableColumns.indexOf(selectedColumn);
    if (columnIndex !== -1) {
      const filtered = csvData
        .split('\n')
        .slice(1)
        .filter((row) => row.split(',')[columnIndex] === selectedValue);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="component-wrapper p-4">
      <h2>Search Data</h2>
      <div className="mb-3">
        <label htmlFor="columnDropdown" className="form-label">
          Select Column
        </label>
        <select
          className="form-select"
          id="columnDropdown"
          value={selectedColumn}
          onChange={handleColumnChange}
        >
          <option value="" disabled>
            Choose a column
          </option>
          {availableColumns.map((column, index) => (
            <option key={index} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>
      {selectedColumn && (
        <div className="mb-3">
          <label htmlFor="valueDropdown" className="form-label">
            Select Value
          </label>
          <select
            className="form-select"
            id="valueDropdown"
            value={selectedValue}
            onChange={handleValueChange}
          >
            <option value="" disabled>
              Choose a value
            </option>
            {uniqueValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      )}
      <button
        type="button"
        className="btn btn-success"
        onClick={handleSearch}
        disabled={!selectedColumn || !selectedValue}
      >
        Search
      </button>
      {filteredData.length > 0 && (
        <div className="mt-4">
          <h3>Filtered Data</h3>
          <table className="table">
            <thead>
              <tr>
                {availableColumns.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.split(',').map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchData;
