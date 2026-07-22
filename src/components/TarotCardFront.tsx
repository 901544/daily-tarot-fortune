import { TarotCard } from '../data/tarotCards';
import { getTarotCardImageUrl, getTarotCardImageUrlFallback } from '../utils/tarotImages';

interface TarotCardFrontProps {
  card: TarotCard;
  isReversed?: boolean;
}

export const TarotCardFront = ({ card, isReversed = false }: TarotCardFrontProps) => {
  const imageUrl = getTarotCardImageUrl(card);
  const fallbackUrl = getTarotCardImageUrlFallback(card);

  return (
    <div
      className="w-[120px] h-[212px] rounded-lg shadow-2xl flex flex-col overflow-hidden relative"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        border: `2px solid ${card.color}`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{ backgroundColor: card.color }}
      />

      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        <div style={{ transform: isReversed ? 'rotate(180deg)' : 'none', width: '100%', height: '100%' }}>
          {imageUrl ? (
            <picture>
              <source srcSet={imageUrl} type="image/webp" />
              <img
                src={fallbackUrl}
                alt={card.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error('[塔罗牌图片加载失败]', {
                    cardName: card.name,
                    cardId: card.id,
                    imageUrl: imageUrl,
                    fallbackUrl: fallbackUrl,
                  });
                  target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('[塔罗牌图片加载成功]', {
                    cardName: card.name,
                    imageUrl: imageUrl,
                  });
                }}
              />
            </picture>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-6xl text-white/50"
              style={{ backgroundColor: `${card.color}20` }}
            >
              {card.type === 'major' ? '☽' :
               card.type === 'wands' ? '🔥' :
               card.type === 'cups' ? '💧' :
               card.type === 'swords' ? '⚔️' : '⭐'}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent z-20">
        <h3 className="text-white font-bold text-sm text-center">{card.name}</h3>
        <p className="text-purple-300 text-xs text-center">{card.nameEn}</p>
      </div>

      {isReversed && (
        <div
          className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold text-red-400 bg-black/50 z-20"
        >
          逆位
        </div>
      )}

      <div
        className="absolute inset-0 rounded-lg pointer-events-none z-30"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${card.color}10 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};
