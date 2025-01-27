import { useState } from 'react';
import { Link } from 'react-router-dom';

function JokerTable({ jokers }) {
  const [filters, setFilters] = useState({
    cost: '',
    rarity: '',
    type: '',
    activation: ''
  });

  const getUniqueValues = (key) => {
    return [...new Set(jokers.map(joker => joker[key]))].sort();
  };

  const filteredJokers = jokers.filter(joker => {
    return Object.keys(filters).every(key => {
      if (!filters[key]) return true;
      return joker[key] === filters[key];
    });
  });

  const resetFilters = () => {
    setFilters({
      cost: '',
      rarity: '',
      type: '',
      activation: ''
    });
  };

  const FilterDropdown = ({ column }) => (
    <select
      value={filters[column]}
      onChange={(e) => setFilters({ ...filters, [column]: e.target.value })}
      style={filterSelectStyle}
    >
      <option value="">All</option>
      {getUniqueValues(column).map(value => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  );

  return (
    <div style={{
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{ 
        marginBottom: '1rem', 
        textAlign: 'right',
        padding: '0 1rem'
      }}>
        <button
          onClick={resetFilters}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            border: '2px solid #c41e3a',
            backgroundColor: '#2a1f1f',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontFamily: 'Playfair Display, serif',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            ':hover': {
              backgroundColor: '#c41e3a',
              transform: 'translateY(-2px)'
            }
          }}
        >
          Reset Filters
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          backgroundColor: '#1f1f1f',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Number</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Effect</th>
              <th style={tableHeaderStyle}>
                Cost
                <div><FilterDropdown column="cost" /></div>
              </th>
              <th style={tableHeaderStyle}>
                Rarity
                <div><FilterDropdown column="rarity" /></div>
              </th>
              <th style={tableHeaderStyle}>
                Type
                <div><FilterDropdown column="type" /></div>
              </th>
              <th style={tableHeaderStyle}>
                Activation
                <div><FilterDropdown column="activation" /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredJokers.map((joker) => (
              <tr key={joker.number} style={{
                ...tableRowStyle,
                backgroundColor: filteredJokers.indexOf(joker) % 2 === 0 ? '#1a1a1a' : '#1f1f1f'
              }}>
                <td style={tableCellStyle}>{joker.number}</td>
                <td style={tableCellStyle}>
                  <Link
                    to={`/joker/${joker.name.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: '#c41e3a',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      fontFamily: 'Playfair Display, serif',
                      display: 'block',
                      ':hover': {
                        color: '#ff2e4a',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {joker.name}
                  </Link>
                </td>
                <td style={tableCellStyle}>{joker.effect}</td>
                <td style={tableCellStyle}>{joker.cost}</td>
                <td style={tableCellStyle}>{joker.rarity}</td>
                <td style={tableCellStyle}>{joker.type}</td>
                <td style={tableCellStyle}>{joker.activation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '16px',
  textAlign: 'left',
  borderBottom: '2px solid #c41e3a',
  backgroundColor: '#2a1f1f',
  color: '#fff',
  fontFamily: 'Playfair Display, serif',
  fontSize: '1.1rem'
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #3a3a3a',
  color: '#fff',
  fontFamily: 'Playfair Display, serif'
};

const tableRowStyle = {
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: '#2a1f1f'
  }
};

const filterSelectStyle = {
  backgroundColor: '#2a1f1f',
  color: '#fff',
  border: '1px solid #c41e3a',
  borderRadius: '4px',
  padding: '6px',
  marginTop: '6px',
  width: '100%',
  fontSize: '0.9rem',
  fontFamily: 'Playfair Display, serif',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: '#ff2e4a'
  }
};

export default JokerTable;
