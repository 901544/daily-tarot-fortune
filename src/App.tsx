import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import DrawPage from '@/pages/DrawPage';
import { ImagePreloader } from '@/components/ImagePreloader';

export default function App() {
  return (
    <>
      <ImagePreloader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<DrawPage />} />
      </Routes>
    </>
  );
}