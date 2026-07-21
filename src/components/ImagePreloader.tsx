import { useEffect, useState } from 'react';
import { tarotCards } from '../data/tarotCards';
import { getTarotCardImageUrl } from '../utils/tarotImages';

export const ImagePreloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = tarotCards.map(card => getTarotCardImageUrl(card)).filter(Boolean);
    const promises = imageUrls.map(url => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      });
    });

    Promise.all(promises).then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: '#1a0f2e' }}>
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🔮</div>
          <div className="text-purple-300 text-lg">正在准备牌面...</div>
        </div>
      </div>
    );
  }

  return null;
};
