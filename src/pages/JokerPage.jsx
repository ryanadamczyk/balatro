import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import jokersList from '../data/jokers_list.json';
import { getJokerImageUrl, toJokerSlug } from '../utils/jokerUtils';

function JokerPage() {
  const { name } = useParams();
  const joker = useMemo(
    () => jokersList.jokers.find((j) => toJokerSlug(j.name) === name),
    [name]
  );

  if (!joker) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Playfair Display, serif'
      }}>Joker not found</div>
    );
  }

  const imageUrl = getJokerImageUrl(joker.name);

  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#1a1a1a',
      minHeight: '100vh'
    }}>
      <Link
        to="/"
        aria-label="Back to Grid"
        className="hover-bg-accent hover-raise"
        style={{
          display: 'inline-block',
          marginBottom: '2rem',
          padding: '0.8rem 1.5rem',
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#2a1f1f',
          borderRadius: '8px',
          border: '2px solid #c41e3a',
          fontFamily: 'Playfair Display, serif',
          transition: 'all 0.3s ease'
        }}
      >
        Back to Grid
      </Link>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '3rem',
        alignItems: 'flex-start',
        backgroundColor: '#2a1f1f',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        border: '2px solid #c41e3a'
      }}>
        <img
          src={imageUrl ?? ''}
          alt={joker.name}
          loading="lazy"
          decoding="async"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        />

        <div style={{
          color: '#fff',
          fontFamily: 'Playfair Display, serif'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            color: '#c41e3a',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>{joker.name}</h1>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              ['Effect', joker.effect],
              ['Cost', joker.cost],
              ['Rarity', joker.rarity],
              ['Type', joker.type],
              ['Activation', joker.activation],
              ['Unlock', joker.unlock]
            ].map(([label, value]) => (
              <p key={label} style={{ fontSize: '1.1rem' }}>
                <strong style={{
                  color: '#c41e3a',
                  marginRight: '0.5rem'
                }}>{label}:</strong>
                {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JokerPage;
