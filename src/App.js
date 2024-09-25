import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/LandingPage';
import Register from './components/MultiStageForm';
import HostTournament from './components/HostTournament';
import Scorecard1 from './components/ScoreCard1';
import SignIn from './components/Signin';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Register />} />
        <Route path="/host-tournament" element={<HostTournament />} />
        <Route path="/matches" element={<Scorecard1 />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
