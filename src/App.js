import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/LandingPage';
import Register from './components/MultiStageForm';
import HostTournament from './components/HostTournament';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/host-tournament" element={<HostTournament />} />
      </Routes>
    </Router>
  );
};

export default App;
