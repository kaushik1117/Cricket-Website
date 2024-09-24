
import './App.css';
import LandingPage from './components/LandingPage';
import MultiStageForm from './components/MultiStageForm';
import HostTournament from './components/HostTournament';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/form" element={<MultiStageForm />} /> 
          <Route path="/host-tournament" element={<HostTournament />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
