import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './jokerStyles.css';

const images = import.meta.glob('../assets/images/*.png', { eager: true });

function JokerCard({ joker }) {
  // Convert joker name to match image filename format (capitalize first letters)
  const imageName = joker.name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('_');
  const imageKey = `../assets/images/${imageName}.png`;
  const imageUrl = images[imageKey]?.default;
  
  return (
    <div className="joker-card">
      {/* Rest of your component remains the same */}
      <div className="joker-card-bg" />
      <Link
        to={`/joker/${joker.name.toLowerCase().replace(/\s+/g, '-')}`}
        data-tooltip-id={`tooltip-${joker.number}`}
        className="joker-card-link"
      >
        <img
          src={imageUrl}
          alt={joker.name}
          className="joker-image"
        />
      </Link>
      
      <Tooltip 
        id={`tooltip-${joker.number}`}
        style={{
          backgroundColor: '#2a1f1f',
          border: '2px solid #c41e3a',
          borderRadius: '8px',
          padding: '1rem',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          fontFamily: 'Playfair Display, serif',
          zIndex: 3
        }}
      >
        <div>
          <h3 style={{ 
            color: '#c41e3a', 
            marginBottom: '0.5rem',
            fontSize: '1.2rem'
          }}>{joker.name}</h3>
          <p style={{ 
            color: '#fff',
            marginBottom: '0.5rem',
            fontSize: '0.9rem'
          }}>{joker.effect}</p>
          <p style={{ 
            color: '#ccc',
            fontSize: '0.9rem'
          }}>{joker.cost} | {joker.rarity}</p>
        </div>
      </Tooltip>
    </div>
  );
}

export default JokerCard;
