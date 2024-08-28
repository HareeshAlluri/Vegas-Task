import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components2/SearchPage.jsx';
import AddCaptionPage from './components2/AddCaptionPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/add-caption" element={<AddCaptionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
