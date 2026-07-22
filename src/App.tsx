import { Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Home from '@/pages/Home';
import DrawPage from '@/pages/DrawPage';
import SpreadPage from '@/pages/SpreadPage';
import SpreadDrawPage from '@/pages/SpreadDrawPage';
import SpreadResultPage from '@/pages/SpreadResultPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/daily" element={<Home />} />
      <Route path="/daily/draw" element={<DrawPage />} />
      <Route path="/spread" element={<SpreadPage />} />
      <Route path="/spread/:type" element={<SpreadDrawPage />} />
      <Route path="/spread/result" element={<SpreadResultPage />} />
    </Routes>
  );
}
