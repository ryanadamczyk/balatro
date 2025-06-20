import JokerCard from './JokerCard';

function JokerGrid({ jokers }) {

  if (!jokers) {
    return <div>No jokers data available</div>;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '1rem',
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {jokers.map((joker) => (
        <JokerCard key={joker.number} joker={joker} />
      ))}
    </div>
  );
}

export default JokerGrid;
