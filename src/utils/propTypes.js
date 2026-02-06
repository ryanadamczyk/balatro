import PropTypes from 'prop-types';

export const jokerPropType = PropTypes.shape({
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  rarity: PropTypes.string.isRequired,
  unlock: PropTypes.string,
  type: PropTypes.string,
  activation: PropTypes.string,
});

export const jokersPropType = PropTypes.arrayOf(jokerPropType).isRequired;
