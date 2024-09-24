import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil';

import MentionsLegals from './pages/mention_legal/mentions_legals';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions_légales" element={<MentionsLegals />} />
      </Routes>
    </Router>
  )
}