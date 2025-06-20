import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import JokerPage from '../JokerPage.jsx';

function renderWithRouter(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/joker/:name" element={<JokerPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('JokerPage', () => {
  test('shows joker details when joker exists', () => {
    renderWithRouter('/joker/joker');

    expect(screen.getByRole('heading', { name: 'Joker' })).toBeInTheDocument();
    expect(screen.getByText('+4 Mult')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to grid/i })).toHaveAttribute(
      'href',
      '/'
    );
  });

  test('displays not found for unknown joker', () => {
    renderWithRouter('/joker/unknown-joker');
    expect(screen.getByText(/joker not found/i)).toBeInTheDocument();
  });
});
