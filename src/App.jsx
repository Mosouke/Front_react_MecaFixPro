import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil';

import MentionsLegals from './pages/mention_legal/mentions_legals';
import SerchPageStep1 from './pages/serch_page/serch_page_step1';
import SerchPageStep2 from './pages/serch_page2/serch_page_step2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions_légales" element={<MentionsLegals />} />
        <Route path="/recherche" element={<SerchPageStep1 />} />
        <Route path="/recherche_step2" element={<SerchPageStep2 />} />
      </Routes>
    </Router>
  )
}