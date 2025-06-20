import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JokerCard from '../JokerCard.jsx';

const sampleJoker = {
  number: '1',
  name: 'Joker',
  effect: '+4 Mult',
  cost: '$2',
  rarity: 'Common'
};

describe('JokerCard', () => {
  test('renders joker information and link', () => {
    render(
      <MemoryRouter>
        <JokerCard joker={sampleJoker} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Joker')).toBeInTheDocument();
    expect(screen.getByText('Joker')).toBeInTheDocument();
    expect(screen.getByText('+4 Mult')).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/joker/joker');
  });
});
