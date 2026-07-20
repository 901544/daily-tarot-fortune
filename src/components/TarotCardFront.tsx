import { TarotCard } from '../data/tarotCards';
import { getTarotCardImageUrl } from '../utils/tarotImages';

interface TarotCardFrontProps {
  card: TarotCard;
}

export const TarotCardFront = ({ card }: TarotCardFrontProps) => {
  const imageUrl = getTarotCardImageUrl(card);

  return (
    <div 
      className="w-36 h-52 rounded-lg shadow-2xl flex flex-col overflow-hidden relative"
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
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={card.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div 
            className="text-6xl text-white/50"
          >
            {card.type === 'major' ? '☽' : 
             card.type === 'wands' ? '🔥' : 
             card.type === 'cups' ? '💧' : 
             card.type === 'swords' ? '⚔️' : '⭐'}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent z-20">
        <h3 className="text-white font-bold text-sm text-center">{card.name}</h3>
        <p className="text-purple-300 text-xs text-center">{card.nameEn}</p>
      </div>

      <div 
        className="absolute inset-0 rounded-lg pointer-events-none z-30"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${card.color}10 0%, transparent 50%)`,
        }}
      />
    </div>
  );
};