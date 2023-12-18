// src/components/UploadCSV.js
import React, { useState, useEffect } from 'react';

const UploadCSV = ({ onUpload, csvDataSent }) => {
    console.log(csvDataSent);
  const [csvData, setCsvData] = useState(csvDataSent);
  useEffect(() => {
    // Set the state with the prop value when the component mounts
    setCsvData(csvDataSent);
  }, [csvDataSent]); // Run this effect whenever csvDataSent prop changes


  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const csvText = event.target.result;
        setCsvData(csvText);
        onUpload(csvText);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="component-wrapper  p-4">
        <br/>
      <h2>Upload CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {csvData && (
        <div>
            <br/><br/>
          <h3>CSV Data</h3>
          <table className="table">
            <thead>
              <tr>
                {csvData.split('\n')[0].split(',').map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.split('\n').slice(1).map((row, rowIndex) => (
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

export default UploadCSV;
