import { useState } from 'react';
import JokerGrid from '../components/JokerGrid';
import JokerTable from '../components/JokerTable';
import jokersList from '../data/jokers_list.json';
import balatroLogo from '../assets/images/balatro-logo.png';

function Home() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%',
      minHeight: '100vh',
      padding: '2rem',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '2rem',
          padding: '1rem',
          background: 'rgba(26, 5, 5, 0.7)',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
        }}>
          <img 
            src={balatroLogo}
            alt="Balatro"
            style={{
              height: '80px',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          />
          
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
            className="hover-bg-accent hover-raise"
            style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              border: '2px solid #c41e3a',
              backgroundColor: 'rgba(26, 5, 5, 0.9)',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'Playfair Display, serif',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Switch to {viewMode === 'grid' ? 'Table' : 'Grid'} View
          </button>
        </div>

        {/* Content Section */}
        <div style={{
          background: 'rgba(26, 5, 5, 0.7)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}>
          {viewMode === 'grid' ? (
            <JokerGrid jokers={jokersList.jokers} />
          ) : (
            <JokerTable jokers={jokersList.jokers} />
          )}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(196, 30, 58, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 80%, rgba(196, 30, 58, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
    </div>
  );
}

export default Home;
