// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UploadCSV from './components/UploadCSV';
import SearchData from './components/SearchData';
import Intro from './components/Intro';

function App() {
  const [csvData, setCsvData] = useState(null);

  const handleUpload = (data) => {
    // Set the CSV data in the state
    setCsvData(data);
  };
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route
          path="/upload"
          element={<UploadCSV onUpload={handleUpload} csvDataSent={csvData}/>}
        />
        <Route
          path="/search"
          element={<SearchData csvData={csvData} />}
        />
        <Route path="/" element={<Intro />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
