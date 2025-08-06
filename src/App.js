import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Homepage from './pages/Homepage';
import AboutUspage from './pages/AboutUspage';
import VolunteerForm from './pages/VolunteerFormPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<AboutUspage />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
    </Router>
  );
}
export default App;
