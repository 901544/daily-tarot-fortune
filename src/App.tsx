import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import DrawPage from '@/pages/DrawPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/draw" element={<DrawPage />} />
    </Routes>
  );
}