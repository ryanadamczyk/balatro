import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { jokersPropType } from '../utils/propTypes';
import { getJokerRoute } from '../utils/jokerUtils';
import './jokerStyles.css';

const FILTER_COLUMNS = ['cost', 'rarity', 'type', 'activation'];
const INITIAL_FILTERS = {
  cost: '',
  rarity: '',
  type: '',
  activation: '',
};

function FilterDropdown({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="joker-select"
    >
      <option value="">All</option>
      {options.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  );
}

function JokerTable({ jokers }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const uniqueFilterValues = useMemo(() => {
    const valuesByColumn = {};

    for (const column of FILTER_COLUMNS) {
      valuesByColumn[column] = [...new Set(jokers.map((joker) => joker[column]))].sort();
    }

    return valuesByColumn;
  }, [jokers]);

  const filteredJokers = useMemo(() => {
    return jokers.filter((joker) => {
      return FILTER_COLUMNS.every((key) => {
        if (!filters[key]) {
          return true;
        }

        return joker[key] === filters[key];
      });
    });
  }, [filters, jokers]);

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

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
                <div>
                  <FilterDropdown
                    value={filters.cost}
                    options={uniqueFilterValues.cost}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFilters((previous) => ({ ...previous, cost: value }));
                    }}
                  />
                </div>
              </th>
              <th className="joker-th">
                Rarity
                <div>
                  <FilterDropdown
                    value={filters.rarity}
                    options={uniqueFilterValues.rarity}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFilters((previous) => ({ ...previous, rarity: value }));
                    }}
                  />
                </div>
              </th>
              <th className="joker-th">
                Type
                <div>
                  <FilterDropdown
                    value={filters.type}
                    options={uniqueFilterValues.type}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFilters((previous) => ({ ...previous, type: value }));
                    }}
                  />
                </div>
              </th>
              <th className="joker-th">
                Activation
                <div>
                  <FilterDropdown
                    value={filters.activation}
                    options={uniqueFilterValues.activation}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFilters((previous) => ({ ...previous, activation: value }));
                    }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredJokers.map((joker, index) => (
              <tr
                key={joker.number}
                className="joker-row"
                style={{
                  backgroundColor: index % 2 === 0 ? '#1a1a1a' : '#1f1f1f'
                }}
              >
                <td className="joker-td">{joker.number}</td>
                <td className="joker-td">
                  <Link
                    to={getJokerRoute(joker.name)}
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

FilterDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

JokerTable.propTypes = {
  jokers: jokersPropType,
};

export default JokerTable;
