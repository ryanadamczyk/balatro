import { useState } from 'react';
import { Link } from 'react-router-dom';
import './jokerStyles.css';

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
      className="joker-select"
    >
      <option value="">All</option>
      {getUniqueValues(column).map(value => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
  );

  return (
    <div className="joker-table-container">
      <div className="joker-table-header">
        <button
          onClick={resetFilters}
          className="reset-filters-btn"
        >
          Reset Filters
        </button>
      </div>
      <div className="joker-table-wrapper">
        <table className="joker-table">
          <thead>
            <tr>
              <th className="joker-th">Number</th>
              <th className="joker-th">Name</th>
              <th className="joker-th">Effect</th>
              <th className="joker-th">
                Cost
                <div><FilterDropdown column="cost" /></div>
              </th>
              <th className="joker-th">
                Rarity
                <div><FilterDropdown column="rarity" /></div>
              </th>
              <th className="joker-th">
                Type
                <div><FilterDropdown column="type" /></div>
              </th>
              <th className="joker-th">
                Activation
                <div><FilterDropdown column="activation" /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredJokers.map((joker) => (
              <tr
                key={joker.number}
                className="joker-row"
                style={{
                  backgroundColor:
                    filteredJokers.indexOf(joker) % 2 === 0 ? '#1a1a1a' : '#1f1f1f'
                }}
              >
                <td className="joker-td">{joker.number}</td>
                <td className="joker-td">
                  <Link
                    to={`/joker/${joker.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="joker-link"
                  >
                    {joker.name}
                  </Link>
                </td>
                <td className="joker-td">{joker.effect}</td>
                <td className="joker-td">{joker.cost}</td>
                <td className="joker-td">{joker.rarity}</td>
                <td className="joker-td">{joker.type}</td>
                <td className="joker-td">{joker.activation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JokerTable;
