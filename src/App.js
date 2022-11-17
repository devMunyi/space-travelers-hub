import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MissionsPage from './pages/Missions';
import RocketsPage from './pages/Rockets';
import NoMatchPage from './pages/NoMatch';
import ProfilePage from './pages/Profile';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<RocketsPage />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={NoMatchPage} />
    </Routes>
  </Router>
);

export default App;
