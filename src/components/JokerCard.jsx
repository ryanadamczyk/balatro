import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

function JokerCard({ joker }) {
  const imageUrl = new URL(`../assets/images/${joker.name.toLowerCase().replace(/\s+/g, '_')}.png`, import.meta.url).href;
  
  return (
    <div style={{
      position: 'relative',
      width: '180px',
      height: '180px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        width: '160px',
        height: '160px',
        backgroundColor: '#1f1f1f',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        border: '2px solid #2a1f1f',
        zIndex: 1
      }}/>
      <Link 
        to={`/joker/${joker.name.toLowerCase().replace(/\s+/g, '-')}`}
        data-tooltip-id={`tooltip-${joker.number}`}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'block',
          textDecoration: 'none',
          transition: 'transform 0.3s ease',
          ':hover': {
            transform: 'translateY(-5px)'
          }
        }}
      >
        <img 
          src={imageUrl}
          alt={joker.name}
          style={{ 
            width: '180px', 
            height: '180px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
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
