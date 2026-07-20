export const CardTable = () => {
  const starPositions = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="relative flex items-center justify-center">
      <div 
        className="absolute w-80 h-80 rounded-full"
        style={{
          border: '1px dashed rgba(212, 175, 55, 0.3)',
          opacity: 0.4,
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full"
        style={{
          border: '1px solid rgba(212, 175, 55, 0.2)',
          opacity: 0.5,
        }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full"
        style={{
          border: '1px solid rgba(212, 175, 55, 0.15)',
          opacity: 0.6,
        }}
      />

      {starPositions.map((angle, index) => {
        const radius = 140;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={index}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, #FFD700 0%, #D4AF37 100%)',
              boxShadow: '0 0 8px rgba(255, 215, 0, 0.6)',
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
};
